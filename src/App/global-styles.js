import { injectGlobal } from 'styled-components'
import { fontFamily, mixins } from '../theme'
import RobotoMono from '../theme/fonts/roboto-mono'
import ACRASTD from '../theme/fonts/ocr-a-std'

/* eslint-disable no-unused-expressions */
injectGlobal`
  /* roboto-mono-light */
  @font-face {
    font-family: 'Roboto Mono';
    font-weight: 300;
    src: url('./${RobotoMono.Light}');
  }

  /* roboto-mono-regular */
  @font-face {
    font-family: 'Roboto Mono';
    font-weight: 400;
    src: url('./${RobotoMono.Regular}');
  }


  /* roboto-mono-medium */
  @font-face {
    font-family: 'Roboto Mono';
    font-weight: 500;
    src: url('./${RobotoMono.Medium}');
  }

  /* roboto-mono-bold */
  @font-face {
    font-family: 'Roboto Mono';
    font-weight: bold;
    src: url('./${RobotoMono.Bold}');
  }

  /* ocr-a-std */
  @font-face {
    font-family: 'OCR A Std';
    font-weight: 400;
    src: url('./${ACRASTD.Regular}');
  }

  html,
  body {
    margin: 0;
    font-size: 16px;

    ${mixins.mediaQuery.tablet`
      font-size: 14px;
    `};
  }
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  * {
    font-family: ${fontFamily('primary')};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
