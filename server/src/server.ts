import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const server = fastify()
const prisma = new PrismaClient()

server.get('/user', async () => {
    const result = await prisma.user.findMany()
    return result
})

server.listen({ //Como a promisse no JavaScript sigfica algo que possa demorar, então é necessário usar o then para que o servidor espere a promisse ser resolvida
    port: 3000,
}).then(() => { //Anonymus function = função sem nome
    console.log('Server is running on port 3000');  
})