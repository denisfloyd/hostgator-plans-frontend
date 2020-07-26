import styled from 'styled-components';

import * as colors from '../../../assets/colors';

export const Container = styled.div`
  width: 266px;
  display: flex;
  flex-direction: column;

  &:before {
    content: '';
    height: 14px;
    width: 100%;
    background-color: ${props => (props.highlighted ? `${colors.orange}` : 'transparent')};
    display: block;
    top: -15px;
    position: relative;
    border-radius: 4px 4px 0px 0px;
  }

  &:after {
    content: '';
    height: 5px;
    width: 100%;
    background-color: ${props => (props.highlighted ? `${colors.orange}` : 'transparent')};
    display: block;
    top: 5px;
    position: relative;
    border-radius: 0px 0px 5px 5px;
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
