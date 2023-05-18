import fastify, { FastifyInstance } from "fastify";
import { z } from 'zod'
import { prisma } from '../lib/prisma'


export async function memoriesRoutes(server: FastifyInstance) { // usando o fastify, devemos passar o server como parametro usando o FastifyInstance como tipo

    server.get('/memories', async () => {
        const memories = await prisma.memory.findMany({
            orderBy: {
                createdAt: 'asc',
            },
        })

        return memories.map((memory) => {
            return {
                id: memory.id,
                coverUrl: memory.coverUrl,
                excerpt: memory.content.substring(0, 115).concat('...'),
            }
            
        })
    })

    server.get('/memories/:id', async (request) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = paramsSchema.parse(request.params)

        const memory = await prisma.memory.findUniqueOrThrow({
            where: {
                id,
            }
        })

        return memory
    })

    server.post('/memories', async (request) => {
        const bodySchema = z.object({
            content: z.string(),
            coverUrl: z.string(),
            isPublic: z.coerce.boolean().default(false),
        })

        const { content, isPublic, coverUrl } = bodySchema.parse(request.body)

        const memory = await prisma.memory.create({
            data: {
                content, 
                isPublic,
                coverUrl,
                userId: '29a716cb-5458-41da-91a6-5e840deaad45',
            }
        })
    })

    server.put('/memories/:id', async (request) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = paramsSchema.parse(request.params)


        const bodySchema = z.object({
            content: z.string(),
            coverUrl: z.string(),
            isPublic: z.coerce.boolean().default(false),
        })

        const { content, isPublic, coverUrl } = bodySchema.parse(request.body)

        const memory = await prisma.memory.update({
            where: {
                id,
            }, 
            data: {
                content,
                coverUrl,
                isPublic,
            }
        })

        return memory
    })

    server.delete('/memories/:id', async (request) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = paramsSchema.parse(request.params)

        await prisma.memory.delete({
            where: {
                id,
            }
        })

        return 'Memory deleted'
    })

}