import { gql } from "apollo-server-express";

const schema = gql`
  extend type Query {
    helloworld: String
  }

  scalar JSON
`;
export default schema;
