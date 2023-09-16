import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllPromptsRoute(app: FastifyInstance) {
    app.get('/prompts', async () => {
        const promtps = await prisma.prompt.findMany()
        return promtps
    })
}