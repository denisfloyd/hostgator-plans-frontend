import React from 'react';
import { Container as Header } from '@material-ui/core';

import logo from '../../assets/hostgator_logo.svg';

import { Container } from './styles';

export default () => (
  <Container>
    <Header maxWidth="lg">
      <img src={logo} alt="Logo da hostgator" />
    </Header>
  </Container>
);


