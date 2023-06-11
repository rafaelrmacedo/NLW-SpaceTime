import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { memoriesRoutes } from './routes/memories';
import { authRoutes } from './routes/auth';
import { uploadRoutes } from './routes/upload'
import { resolve } from 'node:path'

const server = fastify()

server.register(multipart)

server.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

server.register(cors, {
  origin: true,
})

server.register(jwt, {
  secret: 'spacetime',
})

server.register(authRoutes)
server.register(uploadRoutes)
server.register(memoriesRoutes)

server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:3333')
  })