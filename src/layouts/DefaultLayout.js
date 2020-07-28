import '../css/default.css'
import React, {useEffect, useContext} from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { useOktaAuth } from '@okta/okta-react';
import {UserContext, UserDispatchContext} from "../state/userContext";

const DefaultLayout = () => {
  const { authState, authService } = useOktaAuth();
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserDispatchContext);

  useEffect(() => {
    const initUserInfo = async () => {
      const userInfo = await authService.getUser();
      setUser(userInfo);
      console.log("Auth", userInfo)
    }
    initUserInfo();
  }, [authState, authService]); // Update if authState changes

  if(!user) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="view-wrapper">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default DefaultLayout;
