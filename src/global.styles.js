import { createGlobalStyle } from 'styled-components';

import HelveticaNeue from './fonts/HelveticaNeue.ttc';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: HelveticaNeue;
        src: url(${HelveticaNeue})
        font-style: normal;
        font-weight: 500;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'HelveticaNeue';
    }
    a {
        text-decoration: none;
    }
`