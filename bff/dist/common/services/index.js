"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDummyData = void 0;
const axios_1 = __importDefault(require("axios"));
function getDummyData(request) {
    return new Promise((resolve, reject) => {
        // fetch("http://localhost:3000/")
        //   .then((res: any) => {
        //     // tslint:disable-next-line: no-console
        //     console.log(res);
        //     resolve(res);
        //   })
        //   .catch((e) => {
        //     reject(e);
        //   });
        axios_1.default
            .get("http://localhost:3000/")
            .then((response) => {
            // handle success
            // tslint:disable-next-line: no-console
            console.log(response);
            resolve(response.data.data);
        })
            .catch((error) => {
            // handle error
            // tslint:disable-next-line: no-console
            console.log(error);
            reject(error);
        });
    });
}
exports.getDummyData = getDummyData;
//# sourceMappingURL=index.js.map