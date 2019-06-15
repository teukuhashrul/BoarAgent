import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import Login from "./Pages/Login";
import Register from "./Pages/register";
import Home from "./Pages/Home";
import Header from "./components/Header";
//simple set up
let localstorage = window.localStorage;
const client = new ApolloClient({
  uri: process.env.REACT_APP_GATEWAY_URL || "http://localhost:4000"
});

const App = props => (
  <Router>
    <ApolloProvider client={client}>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Home} />
      </Switch>
    </ApolloProvider>
  </Router>
);

export default App;
