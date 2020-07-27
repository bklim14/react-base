import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {ModuleContext, ModuleDispatchContext} from "../state/moduleContext";
import MenuService from "../services/menuService";

const Sidebar = () => {
  const menuService = new MenuService();
  const { routes } = useContext(ModuleContext)
  const { setHeader, setRoutes } = useContext(ModuleDispatchContext)
  console.log('here')
  useEffect(() => {
    const fetchData = async () => {
      const routes = await menuService.getMenu();
      setRoutes(routes);
    }
    fetchData();
    console.log('service call')
  },[]);

  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">React Base</div>
      <div className="list-group list-group-flush">
        { routes.map( (route, i) => {
          return route.link && (
            <Link
              key={i}
              to={route.path}
              className="list-group-item list-group-item-action bg-light"
              onClick={()=>setHeader(route.name)}
            >{route.name}</Link>
          )
        })}
      </div>
    </div>
  );
}

export default  Sidebar;
