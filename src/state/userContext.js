import React, { createContext, useState } from 'react';

const UserContext = createContext();
const UserDispatchContext = createContext();

const UserProvider = ({children}) => {
  const [routes, setRoutes] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user,routes}}>
      <UserDispatchContext.Provider value={{setUser,setRoutes}}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserDispatchContext}
