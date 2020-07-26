import React from 'react';
import styled from 'styled-components';

import {
  RadioGroup,
  styled as MaterialStyled,
  FormControlLabel,
  Typography
} from '@material-ui/core';

import * as colors from '../../../assets/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 42px;

  @media screen and (min-width: 768px) {
    padding-top: 37px;
  }

  @media screen and (min-width: 1920px) {
    padding-top: 50px;
  }
`;

export const SelectPeriodTitle = MaterialStyled(
  ({ ...rest }) => <Typography {...rest} />)({
  color: `${colors.darkBlue}`,
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '26px',
  textAlign: 'center',
  marginBottom: '7px',
});

export const ContentRadio = MaterialStyled(({...rest} ) => <RadioGroup {...rest} />)({
  backgroundColor: colors.white,
  borderRadius: '21px',
  border: `1px solid ${colors.lightBlue}`,
  height: '41px',
  width: '290px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const RadioButtonPanel = MaterialStyled((
  { active, ...rest }) => <FormControlLabel {...rest} />)({
  backgroundColor: props => (props.active ?
     `${colors.lightBlue}` : `${colors.white}`),
  borderRadius: '21px',
  height: '39px',
  width: props => (props.active ? '105px' : '91px'),
  marginLeft: 'unset',
  marginRight: 'unset',
  border: props => (props.active ? `1px solid ${colors.lightBlue}` : '0px'),

  color: props => (props.active ? colors.white : `${colors.blue}`),
  fontWeight: props => (props.active ? 700 : 400),
  fontSize: '16px',
  lineHeight: 23,

  '& .MuiRadio-colorSecondary': {
    color: `${colors.skyBlue}`,
    '&.Mui-checked': {
      color: `${colors.white}`
    }
  }
});
