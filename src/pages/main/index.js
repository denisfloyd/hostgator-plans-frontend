import React from 'react';
import HostGatorHeader from '../../components/hostgator-header';
import Header from './Header';

import {
  MainPage
} from './styles';

const Main = () => {
  return (
    // <PlanosContextProvider>
      <MainPage>
        <HostGatorHeader />
        <Header />

      </MainPage>
    // </PlanosContextProvider>
  )
};

export default Main;
