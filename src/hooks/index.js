import React from 'react';
import { PlansContextProvider } from './plans.context';

const AppProvider = ({ children }) => (
  <PlansContextProvider>
    {children}
  </PlansContextProvider>
);

export default AppProvider;
