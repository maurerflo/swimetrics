import {PrismaClient} from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

let logConfig = [];
if (process.env.NODE_ENV !== "production") logConfig = ['query'];

export const prisma = globalForPrisma.prisma || new PrismaClient({
    log: logConfig,
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
