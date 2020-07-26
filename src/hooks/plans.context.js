import React, {
  createContext,
  useEffect,
  useState,
  useRef,
  useContext,
  useCallback
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import api from '../services/api';
import * as productsActions from '../stores/plans/actions';

const PlansContext = createContext();

const PlansContextProvider = props => {
  const dispatch = useDispatch();
  const { children } = props;

  // const allPlans = useSelector(state => {
  //   console.log(state);
  //   return state.allPlans
  // });
  const [allPlans, setAllPlans] = useState([]);

  const [width, setWidth] = useState(280);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [paymentPeriod, setPaymentPeriod] = useState('triennially');
  const [paymentOptions, setPaymentOptions] = useState([
    { value: 'triennially', label: '3 anos' },
    { value: 'annually', label: '1 ano' },
    { value: 'monthly', label: '1 mês' }
  ]);

  const carouselRef = useRef();

  useEffect(() => {
    async function loadPlans() {
      api.get('prices').then(response => {
        const data = response.data.shared ?
          response.data.shared: {};

        const { products } = data;
        const dataPlansArray = [];

        Object.values(products).forEach(plan => {
          dataPlansArray.push(plan);
        })

        setAllPlans(dataPlansArray);

        // dispatch to reducer and distribute
        dispatch(productsActions.setPlans(dataPlansArray));
      });
    }

    loadPlans();
  }, [dispatch]);

  const scrollTo = newValue => {
    let newScrollPosition = scrollPosition;

    if (newScrollPosition + newValue >= 280 * allPlans.length) {
      newScrollPosition = 280 * allPlans.length;
    } else if (newScrollPosition + newValue < 280 * allPlans.length && newValue > 0) {
      newScrollPosition += newValue;
    }

    if (newScrollPosition + newValue <= 0) {
      newScrollPosition = 0;
    } else if (newScrollPosition + newValue > 0 && newValue < 0) {
      newScrollPosition += newValue;
    }

    carouselRef.current.scroll({
      top: 0,
      left: newScrollPosition,
      behavior: 'smooth'
    });
    setScrollPosition(newScrollPosition);
  };

  // useEffect(() => {
  //   // resizeCanva();

  //   api.get('prices').then(response => {
  //     const data = response.data.shared ?
  //       response.data : { shared: { products: {} } };

  //     // dispatch to reducer and distribute
  //     dispatch(productsActions.setPlans(data));
  //   });
  // }, [dispatch]);

  const data = {
    allPlans,
    carouselRef,
    paymentPeriod,
    setPaymentPeriod,
    paymentOptions,
    scrollTo,
    width
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
