import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ModuleContext, ModuleDispatchContext} from "../state/moduleContext";

const Navbar = () => {
  const { header } = useContext(ModuleContext)
  const { setHeader } = useContext(ModuleDispatchContext)

  const toggleSidebar = () => document.getElementById('wrapper')
    .classList.toggle('toggled');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <button className="btn btn-primary" id="menu-toggle" onClick={toggleSidebar}>Sidebar</button>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">{header}</span>
      </nav>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              Settings
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <Link to="/profile" className="dropdown-item" onClick={() => setHeader('Profile')}>Profile</Link>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
