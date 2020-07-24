import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Content = ({routes}) => {
  return (
    <div className="container">
      <Switch>
        { routes.map( (route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              name={route.name}
              render={ () => <route.component />}
            />
          )
        })}
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  )
}

export default Content;
