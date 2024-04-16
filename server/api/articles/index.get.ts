import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // queryでカテゴリーの指定ができるように変更してみましょう
  return await prisma.article.findMany();
});
