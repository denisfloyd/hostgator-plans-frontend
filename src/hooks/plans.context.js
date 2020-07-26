import React, {
  createContext,
  useEffect,
  useState,
  useRef,
  useContext
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import api from '../services/api';
import * as productsActions from '../stores/plans/actions';

const PlansContext = createContext();

const PlansContextProvider = props => {
  const dispatch = useDispatch();
  const { children } = props;

  const allPlans = useSelector(state => {
    console.log(state);
    return state.allPlans
  });

  const [scrollPosition, setScrollPosition] = useState(0);
  const [paymentPeriod, setPaymentPeriod] = useState('triennially');
  const [paymentOptions, setPaymentOptions] = useState([
    { value: 'triennially', label: '3 anos' },
    { value: 'annually', label: '1 ano' },
    { value: 'monthly', label: '1 mês' }
  ]);

  useEffect(() => {
    // resizeCanva();

    api.get('prices').then(response => {
      const data = response.data.shared ?
        response.data : { shared: { products: {} } };

      // dispatch to reducer and distribute
      dispatch(productsActions.setPlans(data));
    });
  }, [dispatch]);

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
