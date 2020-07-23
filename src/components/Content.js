import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from "../views/Dashboard";
import Form from "../views/Form";
import Profile from "../views/Profile"

const routes = [
  { path: '/home', name: 'Dashboard', component: Dashboard },
  { path: '/form', name: 'Form', component: Form },
  { path: '/profile', name: 'Profile', component: Profile },
]

const Content = () => {
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
