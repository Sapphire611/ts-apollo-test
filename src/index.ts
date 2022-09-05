import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { context } from "./context";
import { schema } from "./schema";
export const server = new ApolloServer({
  schema,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], // 使用离线方案,GraphQL,PlayGround
});

const port = 3000;
// 2
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
