import React from 'react';

import HostGatorHeader from '../../components/hostgator-header';
import Header from './Header';
import PeriodSelector from './SelectPeriod';

import AppProvider from '../../hooks';

import {
  MainPage
} from './styles';

const Main = () => {
  return (
    <AppProvider>
      <MainPage>
        <HostGatorHeader />
        <Header />
        <PeriodSelector />

      </MainPage>
    </AppProvider>
  )
};

export default Main;
