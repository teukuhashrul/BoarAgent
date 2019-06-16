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
import notif from "./Pages/Notif";
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
        <Route path="/checkout" component={Checkout} />
        <Route path="/wishlist" component={wishlist} />
        <Route path="/gallery" component={gallery} />
        <Route path="/notif" component={notif} />
        <Route path="/" exact component={Home} />
      </Switch>
    </ApolloProvider>
  </Router>
);

export default App;
