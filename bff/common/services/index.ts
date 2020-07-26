import axios from "axios";

export function getDummyData(request: any) {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        // tslint:disable-next-line: no-console
        console.log(response);
        resolve(response.data.data);
      })
      .catch((error) => {
        // tslint:disable-next-line: no-console
        console.log(error);
        reject(error);
      });
  });
}
