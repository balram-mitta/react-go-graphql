import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { HELLOWORLD } from "../../queries";

const Helloworld: React.FC<{}> = () => {
  const { data } = useQuery(HELLOWORLD);

  return (data && data.helloworld) || "...loading";
};

export default Helloworld;
