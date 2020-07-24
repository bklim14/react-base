import '../css/default.css'
import React from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

const DefaultLayout = ({headerObj, routes}) => {
  const toggleSidebar = () => document.getElementById('wrapper')
    .classList.toggle('toggled');
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar routes={routes} handleHeaderChange={headerObj.handleHeaderChange}/>
      <div id="view-wrapper">
        <Navbar headerObj={headerObj} onToggleSidebar={toggleSidebar}/>
        <Content routes={routes} />
      </div>
    </div>
  );
}

export default DefaultLayout;
