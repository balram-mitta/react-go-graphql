import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";
import { client } from "./_utils/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Helloworld from "./components/Helloworld";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Helloworld} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
