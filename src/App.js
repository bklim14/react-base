import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import DefaultLayout from "./layouts/DefaultLayout";
import MenuService from "./services/menuService";

const NoMatch = () => {
  return <div> ERROR 404 </div>;
}

const App = () => {
  const menuService = new MenuService();
  const [header, setHeader] = useState('Dashboard');
  const [routes, setRoutes] = useState([]);
  const handleHeaderChange = h => setHeader(h);
  const headerObj = {header, handleHeaderChange};

  useEffect(() => {
    const fetchData = async () => {
      const routes = await menuService.getMenu();
      setRoutes(routes);
    }
    fetchData();
  },[]);

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
