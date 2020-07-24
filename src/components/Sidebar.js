import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({routes, handleHeaderChange}) => {
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
              onClick={()=>handleHeaderChange(route.name)}
            >{route.name}</Link>
          )
        })}
      </div>
    </div>
  );
}

export default  Sidebar;
