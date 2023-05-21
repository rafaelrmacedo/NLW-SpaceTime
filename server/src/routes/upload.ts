import { randomUUID } from "node:crypto";
import { extname, resolve } from "node:path";
import { FastifyInstance } from "fastify";
import { createWriteStream } from "node:fs";
import { promisify } from "node:util";
import { pipeline } from "node:stream";

const pump = promisify(pipeline)

export async function uploadRoutes(server: FastifyInstance) {

    server.post('/upload', async (request, reply) => {
        const upload = await request.file({
            limits: {
                fileSize: 1024 * 1024 * 5, // 5MB file size limit
            }
        })

        if (!upload) {
            reply.status(400).send()
        }

        const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/
        const isValidFileFormat = mimeTypeRegex.test(upload.mimetype)

        if (!isValidFileFormat) {
            reply.status(400).send()
        }

        const fileID = randomUUID()
        const fileExtension = extname(upload.filename)
        const fileName = fileID + fileExtension

        const writeStream = createWriteStream(resolve(__dirname, '../../uploads', fileName))

        await pump(upload.file, writeStream)

        const fullUrl = request.protocol.concat('://').concat(request.hostname) //full server url
        const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString()

        return { fileUrl }
    })
}