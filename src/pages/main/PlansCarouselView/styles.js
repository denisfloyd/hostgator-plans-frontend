import React from 'react';
import styled from 'styled-components';
import { styled as MaterialStyled, IconButton } from '@material-ui/core';

import * as colors from '../../../assets/colors';

export const Container = styled.div`
  position: relative;
  max-width: 100%;
`;

export const ButtonNavigation = MaterialStyled(({
  ...rest }) =>
  <IconButton {...rest} />)({
    width: '35px',
    height: '35px',
    backgroundColor: `${colors.darkBlue} !important`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 'calc(50%)',
    zIndex: 3,

    '&.leftArrow': {
      left: '5px',
      '& svg': {
        marginLeft: '8px'
      }
    },

    '&.rightArrow': {
      right: '5px',
      '& svg': {
        marginLeft: '3px'
      }
    },

    '& svg': {
      fill: colors.white
    },

    '@media screen and (min-width: 870px)': {
      display: 'none'
    }
});

export const CarouselContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  overflow: scroll;
  position: relative;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const CarouselView = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: calc(${props => props.size * 268}px + ${props => props.size * 10}px + 42px);
  padding: 14px 0px 5px 0px;

  & > div {
    margin: 0px 5px;
  }

  & > div:first-child {
    margin-left: 26px;
  }

  & > div:last-child {
    margin-right: 26px;
  }
`;

export const PlanCardContainer = styled.div`
  background: ${colors.white};
  border-radius: 4px;
  border: 1px solid ${colors.lightWhite};
  opacity: 1;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
