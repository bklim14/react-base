import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import DefaultLayout from "./layouts/DefaultLayout";
import Dashboard from "./views/Dashboard";
import Form from "./views/Form";
import Profile from "./views/Profile";

const NoMatch = () => {
  return <div> ERROR 404 </div>;
}

const routes = [
  { path: '/home', name: 'Dashboard', component: Dashboard, link: true },
  { path: '/form', name: 'Form', component: Form, link: true},
  { path: '/profile', name: 'Profile', component: Profile, link: false},
]

const App = () => {
  const [header, setHeader] = useState('Dashboard');
  const handleHeaderChange = h => setHeader(h);
  const headerObj = {header, handleHeaderChange}
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <DefaultLayout
          headerObj={headerObj}
          routes={routes}/>}></Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
