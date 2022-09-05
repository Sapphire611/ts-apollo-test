/*
 * @Author: Sapphire Liu
 * @Date: 2022-09-05 16:28:18
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-09-05 17:39:33
 * @Description: grapgql for Link...
 */

import { extendType, nonNull, objectType, stringArg } from "nexus";
import { PrismaClient } from '@prisma/client';

export const Link = objectType({
  name: "Link",
  definition(t) {
    t.nonNull.int("id"),
      t.nonNull.string("description"),
      t.nonNull.string("url");
  },
});

export const LinkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "Link",
      resolve(parent, args, context) {
        return context.prisma.link.findMany(); // 1
      },
    });
  },
});

export const LinkMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("post", {
      type: "Link",
      args: {
        description: nonNull(stringArg()),
        url: nonNull(stringArg()),
      },
      resolve(parent, args, context) {
        const newLink = context.prisma.link.create({
          // 2
          data: {
            description: args.description,
            url: args.url,
          },
        });
        return newLink;
      },
    });
  },
});
