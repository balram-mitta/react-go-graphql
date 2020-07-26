"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const resolvers = {
    Query: {
        helloworld(root, args, context) {
            return services_1.getDummyData(args.request);
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=index.js.map