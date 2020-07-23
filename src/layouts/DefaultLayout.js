import '../css/default.css'
import React from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

const DefaultLayout = () => {
  const toggleSidebar = () => document.getElementById('wrapper')
    .classList.toggle('toggled');
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="view-wrapper">
        <Navbar onToggleSidebar={toggleSidebar}/>
        <Content />
      </div>
    </div>
  );
}

export default DefaultLayout;
