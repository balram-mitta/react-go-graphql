import { getDummyData } from '../services';

const resolvers = {
  Query: {
    helloworld(root: any, args: any, context: any) {
      return getDummyData(args.request);
    },
  },
};

export default resolvers;
