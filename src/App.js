import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import DefaultLayout from "./layouts/DefaultLayout";

const NoMatch = () => {
  return <div> ERROR 404 </div>;
}
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <DefaultLayout/>}></Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
