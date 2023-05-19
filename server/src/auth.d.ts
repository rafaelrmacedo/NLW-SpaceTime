import "@fastify/jwt"

declare module "@fastify/jwt" { 
  export interface FastifyJWT {
    user: { // This is the user object that will be available in the request
        sub: string
        name: string
        avatarUrl: string
      } 
  }
}
