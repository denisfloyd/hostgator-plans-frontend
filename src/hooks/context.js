import React, { createContext, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import * as productsActions from 'store/products/actions';

const Context = createContext();

let resizeTimeout = null;
export const PlanosContextProvider = props => {
  const dispatch = useDispatch();
  const { children } = props;

  const allProducts = useSelector(state => state.products.allProducts);
  const carouselRef = useRef();

  const [width, setWidth] = useState(window.outerWidth);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [paymentPeriod, setPaymentPeriod] = useState('triennially');
  const [paymentOptions, setPaymentOptions] = useState([
    { value: 'triennially', label: '3 anos' },
    { value: 'annually', label: '1 ano' },
    { value: 'monthly', label: '1 mês' }
  ]);

  const scrollTo = newValue => {
    let newScrollPosition = scrollPosition;

    if (newScrollPosition + newValue >= width * allProducts.length) {
      newScrollPosition = width * allProducts.length;
    } else if (newScrollPosition + newValue < width * allProducts.length && newValue > 0) {
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

  const resizeCanva = () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      const windowWidth = window.outerWidth;
      setWidth(windowWidth);
    }, 500);

    window.addEventListener('resize', resizeCanva);

    return () => {
      window.removeEventListener('resize', resizeCanva);
    };
  };

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

  const values = {
    allProducts,
    carouselRef,
    paymentPeriod,
    setPaymentPeriod,
    paymentOptions,
    setPaymentOptions,
    scrollTo,
    width
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

PlanosContextProvider.propTypes = {
  children: PropTypes.node
};

PlanosContextProvider.defaultProps = {
  children: null
};

export const PlanosContextConsumer = Context.Consumer;
export default PlanosContextProvider;
