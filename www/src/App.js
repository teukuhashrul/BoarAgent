import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import Login from "./Pages/Login";
import Register from "./Pages/register";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Checkout from "./Pages/Checkout";
import wishlist from "./Pages/Wishlist";
import gallery from "./Pages/Gallery";
//simple set up
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

const App = props => (
  <Router>
    <ApolloProvider client={client}>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/wishlist" component={wishlist} />
        <Route path="/gallery" component={gallery} />

        <Route path="/" exact component={Home} />
      </Switch>
    </ApolloProvider>
  </Router>
);

export default App;
