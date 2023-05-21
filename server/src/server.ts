import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { memoriesRoutes } from './routes/memories';
import { authRoutes } from './routes/auth';
import { uploadRoutes } from './routes/upload'

const server = fastify()

server.register(multipart)
server.register(authRoutes)
server.register(memoriesRoutes)
server.register(uploadRoutes) 

server.register(cors, {
    origin: true,
})

server.register(jwt, {
    secret: 'spacetime'
})

server.listen({ //Como a promisse no JavaScript sigfica algo que possa demorar, então é necessário usar o then para que o servidor espere a promisse ser resolvida
    port: 3333,
}).then(() => { //Anonymus function = função sem nome
    console.log('Server is running on port 3333');  
})