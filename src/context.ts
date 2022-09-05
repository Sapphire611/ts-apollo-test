/*
 * @Author: Sapphire Liu
 * @Date: 2022-09-05 17:28:11
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-09-05 17:28:23
 * @Description: context.ts...
 */
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export interface Context {
  // 1
  prisma: PrismaClient;
}

export const context: Context = {
  // 2
  prisma,
};
