import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody<{ title: string; content: string }>(event);
  await prisma.article.create({
    data: {
      id: new Date().getTime().toString(),
      title: body.title,
      content: body.content,
    },
  });
});
