import React from 'react';
import { useDispatch } from 'react-redux';

import GlobalStyle from './styles/global';
import Routers from './routes'

import './App.css';
import api from './services/api';
import * as plansActions from './stores/plans/actions';

function App() {
  const dispatch = useDispatch();

  api.get('prices').then(response => {
    const data = response.data.shared ?
      response.data.shared: {};

    const { products } = data;
    let dataPlansArray = [];

    Object.values(products).forEach(plan => {
      dataPlansArray.push(plan);
    });

    dataPlansArray = dataPlansArray.filter(plan => {
      return plan.name === 'Plano P' ||  plan.name === 'Plano M' ||
        plan.name === 'Plano Turbo'
    });

    // dispatch to reducer and distribute
    dispatch(plansActions.setPlans(dataPlansArray));
  });

  return (
    <>
      <Routers />

      <GlobalStyle />
    </>
  );
}

export default App;
