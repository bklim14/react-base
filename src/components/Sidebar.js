import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">React Base</div>
      <div className="list-group list-group-flush">
        <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Form</a>
      </div>
    </div>
  );
}

export default  Sidebar;
