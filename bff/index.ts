import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import Common from "./common";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema: buildFederatedSchema([Common]),
});

// The `listen` method launches a web server.
server.listen({ port: "3001" }).then(({ url }) => {
  // tslint:disable-next-line:no-console
  console.log(`🚀  Server ready at ${url}`);
});
