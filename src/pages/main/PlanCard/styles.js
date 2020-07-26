import React from 'react';

import styled from 'styled-components';
import { shade } from 'polished';
import { styled as MaterialStyled, Button } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

import * as colors from '../../../assets/colors';

export const Container = styled.div`
  width: 266px;
  display: flex;
  flex-direction: column;

  &:before {
    content: '';
    height: 10px;
    width: 95%;
    background-color: ${props => (props.highlighted ? `${colors.orange}` : 'transparent')};
    display: block;
    top: -15px;
    position: relative;
    border-radius: 4px 4px 0px 0px;
    align-self: center;
  }

  &:after {
    content: '';
    height: 5px;
    width: 95%;
    background-color: ${props => (props.highlighted ? `${colors.orange}` : 'transparent')};
    display: block;
    top: 5px;
    position: relative;
    border-radius: 0px 0px 5px 5px;
    align-self: center;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 34px 26px 0px;
  flex-direction: column;

  p {
    color: ${colors.darkBlue};
    font-size: 26px;
    font-weight: 700;
    line-height: 26px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 27px
  }
`;

export const SeparatorLine = styled.div`
  background-color: ${colors.lightWhite};
  height: 1px;
  width: 100%;
`;

export const CardPrices = styled.div`
  padding: 30px 15px 35px;
`;

export const PriceContainer = styled.div`
  color: ${colors.lightBlack};
  font-size: 13px;
  font-weight: 700;
  line-height: 19px;
  text-align: center;

  span {
    font-weight: 400;
    text-decoration: line-through
  }
`;

export const PriceByMonthContainer = styled.div`
  color: ${colors.darkBlue};
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;

  span {
    font-weight: 700;
    font-size: 35px
  }
`;

export const ButtonContainer = MaterialStyled((
  { isSelected, ...rest }) => <Button {...rest} />)({
  backgroundColor: props => (props.isSelected ? `${colors.orange}` : `${colors.lightBlue} !important`),
  borderRadius: '26px',
  color: colors.white,
  fontSize: '18px',
  fontWeight: 700,
  height: '44px',
  lineHeight: '27px',
  marginBottom: '32px',
  marginTop: '25px',
  width: '229px',
  textTransform: 'capitalize',

  '&:hover': {
    opacity: 0.8,
    color: `${shade(0.2, '#f4ede8')} !important`
  },

  '& .MuiButton-root:hover': {
    opacity: '0.8 !important',
    color: `${shade(0.2, '#f4ede8')} !important`
  }
});

export const TextYearFree = styled.div`
  align-items: center;
  color: ${colors.lightBlack};
  display: flex;
  font-size: 15px;
  font-weight: 700;
  justify-content: center;
  line-height: 20px;
  margin-bottom: 12px;
  text-align: center;
`;

export const IconInfoContainer = MaterialStyled(({ ...rest }) => <InfoIcon {...rest} />)({
  fill: `${colors.darkBlue} !important`,
  maxHeight: '15px',
  maxWidth: '15px'
});

export const DiscountContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  span + span {
    align-items: center;
    background-color: ${colors.blueMarinho};
    border-radius: 224px;
    color: ${colors.white};
    display: flex;
    font-family: 'Montserrat', 'Helvetica', 'Arial', sans-serif;
    font-size: 14px;
    font-weight: 700;
    height: 23px;
    justify-content: center;
    line-height: 14px;
    margin-left: 8px;
    width: 80px;
  }
`;

export const DiscountText = styled.span`
  align-items: center;
  color: ${colors.darkBlue};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  flex: none
`;

