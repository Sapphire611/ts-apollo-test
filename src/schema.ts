/*
 * @Author: Sapphire Liu
 * @Date: 2022-09-05 15:30:20
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-09-05 17:29:55
 * @Description: schema for nexus...
 */
import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./graphql";

export const schema = makeSchema({
  types, // 所有定义好的内容
  outputs: {
    schema: join(process.cwd(), "schema.graphql"), // 用于定义 API 结构的 GraphQLSDL
    typegen: join(process.cwd(), "nexus-typegen.ts"), //  GraphQL 架构中所有类型的 TypeScript 类型定义
  },
  contextType: {
    module: join(process.cwd(), "./src/context.ts"), // 1
    export: "Context", // 2
  },
});
