import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import './App.css';
import DefaultLayout from "./layouts/DefaultLayout";
import config from "./authConfig";
import Login from "./components/Login";
import {UserProvider} from "./state/userContext";

const HasAccessToRouter = () => {

  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  }

  return (
    <Security {...config.oidc} onAuthRequired={customAuthHandler}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/callback" component={LoginCallback} />
        <UserProvider>
          <SecureRoute path="/" component={DefaultLayout}/>
        </UserProvider>
      </Switch>
    </Security>
  );
}

const App = () => (
  <Router basename="/react-base">
    <HasAccessToRouter />
  </Router>
)

export default App;
