import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { prisma } from '../lib/prisma'


export async function memoriesRoutes(server: FastifyInstance) { // usando o fastify, devemos passar o server como parametro usando o FastifyInstance como tipo

    server.addHook('preHandler', async (request) => { // Validate the JWT token before every request
        await request.jwtVerify() // Verify if the JWT token is valid
    })

    server.get('/memories', async (request) => {
        const memories = await prisma.memory.findMany({
            where: { // Filter the memories by the user id
                userId: request.user.sub,
            },
            orderBy: {
                createdAt: 'asc',
            },
        }) // Get all the memories

        return memories.map((memory) => {
            return {
                id: memory.id,
                coverUrl: memory.coverUrl,
                excerpt: memory.content.substring(0, 115).concat('...'),
            }
        }) // Return only the id, coverUrl and the first 115 characters of the content
    })

    server.get('/memories/:id', async (request, reply) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        }) // Validation Schema for the request params

        const { id } = paramsSchema.parse(request.params)

        const memory = await prisma.memory.findUniqueOrThrow({
            where: {
                id,
            }
        }) // Find the memory or throw an error if it doesn't exist

        if (!memory.isPublic && memory.userId !== request.user.sub) {
            return reply.status(401).send() // Return an error if the memory doesn't belong to the user
        }

        return memory
    })

    server.post('/memories', async (request) => {
        const bodySchema = z.object({
          content: z.string(),
          coverUrl: z.string(),
          isPublic: z.coerce.boolean().default(false),
        })
    
        const { content, coverUrl, isPublic } = bodySchema.parse(request.body)
    
        const memory = await prisma.memory.create({
          data: {
            content,
            coverUrl,
            isPublic,
            userId: request.user.sub,
          },
        })
    
        return memory
      })

    server.put('/memories/:id', async (request, reply) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        }) // Validation Schema for the request params

        const { id } = paramsSchema.parse(request.params) // Validate the request params

        const bodySchema = z.object({
            content: z.string(),
            coverUrl: z.string(),
            isPublic: z.coerce.boolean().default(false),
        }) // Validation Schema for the request body

        const { content, isPublic, coverUrl } = bodySchema.parse(request.body) // Validate the request body

        let memory = await prisma.memory.findUniqueOrThrow({
            where: {
                id,
            }
        })

        if (memory.userId !== request.user.sub) {
            return reply.status(401).send() // Return an error if the memory doesn't belong to the user
        }

        memory = await prisma.memory.update({
            where: {
                id,
            }, 
            data: {
                content,
                coverUrl,
                isPublic,
            }
        }) // Update the memory

        return memory
    })

    server.delete('/memories/:id', async (request, reply) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        }) // Validation Schema for the request params

        const { id } = paramsSchema.parse(request.params) // Validate the request params

        const memory = await prisma.memory.findUniqueOrThrow({
            where: {
                id,
            }
        })

        if (memory.userId !== request.user.sub) {
            return reply.status(401).send() // Return an error if the memory doesn't belong to the user
        }

        await prisma.memory.delete({
            where: {
                id,
            }
        }) // Delete the memory

        return 'Memory deleted'
    })

}