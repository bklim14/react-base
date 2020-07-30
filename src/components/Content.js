import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {UserContext} from "../state/userContext";

const Content = () => {
  const { routes } = useContext(UserContext)
  return (
    <div className="container">
      <Switch>
        { routes.map( (route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              name={route.name}
              component={route.component}
            />
          )
        })}
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
