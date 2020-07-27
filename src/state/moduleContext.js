import React, { createContext, useState } from 'react';

const ModuleContext = createContext();
const ModuleDispatchContext = createContext();

const ModuleProvider = ({children}) => {
  const [header, setHeader] = useState('Dashboard');
  const [routes, setRoutes] = useState([]);

  return (
    <ModuleContext.Provider value={{header, routes}}>
      <ModuleDispatchContext.Provider value={{setHeader, setRoutes}}>
        {children}
      </ModuleDispatchContext.Provider>
    </ModuleContext.Provider>
  );
}

export { ModuleProvider, ModuleContext, ModuleDispatchContext}
