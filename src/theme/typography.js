// Font weights
const weights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
}

// Text and line heights
const baseFontSize = 1 // 20px
const baseLineHeight = `${baseFontSize}rem`

const textSettings = {
  xs: {
    fontSize: '.8rem', // 16px
    lineHeight: baseLineHeight,
  },
  sm: {
    fontSize: '.9rem', // 18px
    lineHeight: baseLineHeight,
  },
  reg: { // regular
    fontSize: '1rem', // 20px
    lineHeight: `${baseFontSize}rem`,
  },
  md: {
    fontSize: '1.1rem', // 22px
    lineHeight: `${baseFontSize * 2}`,
  },
  lg: {
    fontSize: '1.3rem', // 26px
    lineHeight: `${baseFontSize * 2}rem`,
  },
  xl: {
    fontSize: '1.6rem', // 32px
    lineHeight: `${baseFontSize * 2}rem`,
  },
}

// Font families
const fontFamilies = {
  primary: 'Roboto Mono',
  secondary: 'OCR A Std',
}

export {
  weights,
  textSettings,
  fontFamilies,
}
