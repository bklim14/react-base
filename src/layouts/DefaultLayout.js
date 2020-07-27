import '../css/default.css'
import React from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import {ModuleProvider} from "../state/moduleContext";

const DefaultLayout = () => {
  return (
    <div className="d-flex" id="wrapper">
      <ModuleProvider>
        <Sidebar />
        <div id="view-wrapper">
          <Navbar />
          <Content />
        </div>
      </ModuleProvider>
    </div>
  );
}

export default DefaultLayout;
