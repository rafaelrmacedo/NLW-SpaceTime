import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories';

const server = fastify()

server.register(memoriesRoutes) 

server.register(cors, {
    origin: true,
})

server.listen({ //Como a promisse no JavaScript sigfica algo que possa demorar, então é necessário usar o then para que o servidor espere a promisse ser resolvida
    port: 3000,
}).then(() => { //Anonymus function = função sem nome
    console.log('Server is running on port 3000');  
})