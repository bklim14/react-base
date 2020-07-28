import React, {useContext} from 'react';
import { useOktaAuth } from '@okta/okta-react';
import {UserContext} from "../state/userContext";

const Navbar = () => {
  const { authService } = useOktaAuth();
  const { user } = useContext(UserContext);

  const logout = () => {
    authService.logout('/');
  };

  const toggleSidebar = () => document.getElementById('wrapper')
    .classList.toggle('toggled');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <button className="btn btn-primary" id="menu-toggle" onClick={toggleSidebar}>Sidebar</button>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              Hi {user.given_name}!
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#" onClick={logout}>Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
