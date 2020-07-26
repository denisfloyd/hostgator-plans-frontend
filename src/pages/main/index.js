import React from 'react';

import HostGatorHeader from '../../components/hostgator-header';
import Header from './Header';
import PeriodSelector from './SelectPeriod';
import PlansCarouselView from './PlansCarouselView';

import AppProvider from '../../hooks';

import {
  MainPage,
  HeaderContainer,
  PlansViewContainer
} from './styles';

const Main = () => {
  return (
    <AppProvider>
      <MainPage>
        <HeaderContainer>
          <HostGatorHeader /> { /* HostGator Header with logo */ }
          <Header /> { /* App Header with absolute images */ }
        </HeaderContainer>

        <PlansViewContainer>
          <PeriodSelector /> { /* Select plan period to payment */}
          <PlansCarouselView />
        </PlansViewContainer>

      </MainPage>
    </AppProvider>
  )
};

export default Main;
