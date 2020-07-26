import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "http://localhost:3001",
  //   request: async (operation: Operation) => {
  //     const accessToken = Auth.getInstance()
  //       ? await Auth.getInstance()!.getAccessToken()
  //       : '';
  //     const headers = {
  //       ...operation.getContext().headers,
  //       authorization: `Bearer ${accessToken}`,
  //     };
  //     operation.setContext({
  //       headers,
  //     });
  //   },
});
