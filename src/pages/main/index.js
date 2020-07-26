import React from 'react';

import HostGatorHeader from '../../components/hostgator-header';
import Header from './Header';
import PeriodSelector from './SelectPeriod';

import AppProvider from '../../hooks';

import {
  MainPage,
  PlansViewContainer
} from './styles';

const Main = () => {
  return (
    <AppProvider>
      <MainPage>
        <HostGatorHeader /> { /* HostGator Header with logo */ }
        <Header /> { /* App Header with absolute images */ }

        <PlansViewContainer>
          <PeriodSelector />
        </PlansViewContainer>

      </MainPage>
    </AppProvider>
  )
};

export default Main;
