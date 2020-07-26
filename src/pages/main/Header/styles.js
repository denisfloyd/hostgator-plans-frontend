import styled from 'styled-components';
import * as colors from '../../../assets/colors'

import headerImgLeft from '../../../assets/header_img_left.svg';
import headerImgRight from '../../../assets/header_img_right.svg';

export const Container = styled.div`
  @media screen and (min-width: 1024px) {
    &:before {
      content: "";
      position: absolute;
      top: 114px;
      left: 10px;
      width: 300px;
      height: 353px;
      background-image: url(${headerImgLeft});
      background-repeat: no-repeat;
      background-position: center bottom;
      background-size: 300px;
      z-index: 1;
    }
    &:after {
      content: "";
      position: absolute;
      top: 114px;
      right: 20px;
      width: 300px;
      height: 346px;
      background-image: url(${headerImgRight});
      background-repeat: no-repeat;
      background-position: center bottom;
      background-size: 300px;
      z-index: 1;
    }
  }

`;

export const HeaderContainer = styled.div`
  color: white;
  height: 320px;
  background-color: ${colors.darkBlue};
  line-height: 1.5;
  font-weight: 300;
  /* margin-bottom: 45px; */
  overflow: hidden !important;
`;

export const Content = styled.div`
  height: 100%;
  flex: 1 !important;
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column;

  padding: 0 !important;
`;

export const TitleHeader = styled.div`
  letter-spacing: 1.5px;
  font-size: 16px;
  color: ${colors.gray};
  font-weight: 500;
`;

export const DescriptionHeader = styled.div`
  max-width: 750px;

  > p {
    font-size: 30px;
    margin: 15px 0 30px;
    font-weight: bold;
    text-align: center;

    @media only screen and (max-width: 430px) {
      font-size: 25px;
    }

    @media only screen and (max-width: 321px) {
      font-size: 20px;
    }
  }
`;

export const DescriptionContent = styled.div`
  max-width: 490px;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
`;

export const DescriptionView = styled.div`
  text-align: center;

  > svg {
    position: relative;
    top: 3px;
  }

  > span {
    padding-left: 3px;
    padding-right: 10px;
    font-size: 16px;
    color: ${colors.gray};
  }
`;

export const BoxContainer = styled.div`
  height: 65px;
  width: 100%;
  overflow: hidden;
  bottom: 0px;
  position: relative;
  z-index: 0;

  svg > path {
    fill: ${colors.darkBlue};
  }

  a {
    position: absolute;
    top: -5px;
    left: 50%;
    width: 50px;
    margin-left: -25px;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;

      :hover {
        transform: scale(1.05);
      }
    }

    @media only screen and (min-width: 340px) {
      top: 0;
    }

    @media only screen and (min-width: 769px) {
      margin-top: 1vh;
    }

    @media only screen and (min-width: 1025px) {
      margin-top: 3vh;
    }
  }
`

