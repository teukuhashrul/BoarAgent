import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
//simple set up
const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io"
});

function App() {
  return (
    <ApolloProvider client={client}>
        <div className="">
          <p>hello</p>
        </div>
    </ApolloProvider>
  );
}

export default App;
