import React, {
  createContext,
  useState,
  useRef,
  useContext
} from 'react';
import { useSelector } from 'react-redux';

const PlansContext = createContext();

const PlansContextProvider = props => {
  // const dispatch = useDispatch();
  const { children } = props;

  const allPlans = useSelector(state => {
    //console.log(state);
    return state.allPlans ? state.allPlans : [];
  });

  const [scrollPosition, setScrollPosition] = useState(0);
  const [paymentPeriod, setPaymentPeriod] = useState('triennially');
  const [paymentOptions] = useState([
    { value: 'triennially', label: '3 anos' },
    { value: 'annually', label: '1 ano' },
    { value: 'monthly', label: '1 mês' }
  ]);

  const carouselRef = useRef();

  const scrollTo = newValue => {
    let newScrollPosition = scrollPosition;

    if (newScrollPosition + newValue > 280 * allPlans.length) {
      return;
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

  const data = {
    allPlans,
    carouselRef,
    paymentPeriod,
    setPaymentPeriod,
    paymentOptions,
    scrollTo,
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
