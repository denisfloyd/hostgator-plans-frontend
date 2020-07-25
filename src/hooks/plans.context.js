import React, { createContext, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import api from '../services/api';

const PlansContext = createContext();

export const PlansContextProvider = props => {
  const dispatch = useDispatch();
  const { children } = props;

  const allPlans = useSelector(state => state.plans.allPlans);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [paymentPeriod, setPaymentPeriod] = useState('triennially');
  const [paymentOptions, setPaymentOptions] = useState([
    { value: 'triennially', label: '3 anos' },
    { value: 'annually', label: '1 ano' },
    { value: 'monthly', label: '1 mês' }
  ]);

  useEffect(() => {
    resizeCanva();

    axios.get('https://7ac2b8ab-f3e5-4534-863d-90dd424a6405.mock.pstmn.io/prices').then(response => {
      const productArray = [];
      const { products } = response.data.shared;
      Object.values(products).forEach(product => {
        productArray.push(product);
      });
      dispatch(productsActions.setProducts(productArray));
    });
  }, []);

  const data = {
    allPlans,
    // carouselRef,
    paymentPeriod,
    setPaymentPeriod,
    paymentOptions,
  };

  return (
    <PlansContext.Provider
      value={data}
    >
      {children}
    </PlansContext.Provider>
  );
}

function useDataPlans() {
  const context = useContext(PlansContext);

  if (!context) {
    throw new Error('useDataPlans must be used within an AuthProvider');
  }

  return context;
}

export { PlansContextProvider, useDataPlans };
