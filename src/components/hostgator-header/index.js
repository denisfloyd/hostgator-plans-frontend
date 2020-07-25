import React from 'react';

import logoImg from '../../assets/hostgator_logo.svg';

import { Container, Header } from './styles';

const HostGatorHeader = () => (
  <Container>
    <Header maxWidth="lg">
      <img src={logoImg} alt="HostGator_logo" />
    </Header>


  </Container>
);

export default HostGatorHeader;
