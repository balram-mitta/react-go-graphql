"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const federation_1 = require("@apollo/federation");
const common_1 = __importDefault(require("./common"));
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new apollo_server_1.ApolloServer({
    schema: federation_1.buildFederatedSchema([common_1.default]),
});
// The `listen` method launches a web server.
server.listen({ port: "3001" }).then(({ url }) => {
    // tslint:disable-next-line:no-console
    console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map