import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";
import axios from "axios";

export async function authRoutes(server: FastifyInstance) {

    server.post('/register', async (request) => {
        const bodySchema = z.object({
          code: z.string(),
        }) // Validation Schema for the request body
    
        const { code } = bodySchema.parse(request.body) // Validate the request body
    
        const accessTokenResponse = await axios.post(
          'https://github.com/login/oauth/access_token',
          null,
          {
            params: {
              client_id: process.env.GITHUB_CLIENT_ID,
              client_secret: process.env.GITHUB_CLIENT_SECRET,
              code,
            },
            headers: {
              Accept: 'application/json',
            },
          },
        ) // Get the access token from GitHub
    
        const { access_token } = accessTokenResponse.data // Extract the access token from the response
    
        const userResponse = await axios.get('https://api.github.com/user', {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }) // Get the user info from GitHub
    
        const userSchema = z.object({
          id: z.number(),
          login: z.string(),
          name: z.string(),
          avatar_url: z.string().url(),
        }) // Validation Schema for the user info
    
        const userInfo = userSchema.parse(userResponse.data) // Validate the user info
    
        let user = await prisma.user.findUnique({
          where: {
            githubId: userInfo.id,
          },
        }) // Check if the user already exists in the database
    
        if (!user) {
          user = await prisma.user.create({
            data: {
              githubId: userInfo.id,
              login: userInfo.login,
              name: userInfo.name,
              avatarUrl: userInfo.avatar_url,
            },
          })
        } // If the user doesn't exist, create it
    
        const token = server.jwt.sign(
          {
            name: user.name,
            avatarUrl: user.avatarUrl,
          },
          {
            sub: user.id,
            expiresIn: '30 days',
          },
        ) // Generate the JWT token
    
        return {
          token,
        }
      })
    
}