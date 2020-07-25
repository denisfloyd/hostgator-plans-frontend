import { createGlobalStyle } from 'styled-components';

import * as colors from '../assets/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: ${colors.lightGray};
    margin: 0;
    color: ${colors.lightBlack};
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
