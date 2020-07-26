"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const schema = apollo_server_express_1.gql `
  extend type Query {
    helloworld: String
  }

  scalar JSON
`;
exports.default = schema;
//# sourceMappingURL=index.js.map