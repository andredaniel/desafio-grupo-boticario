import {
  ColorDanger,
  ColorInfo,
  ColorPrimary,
  ColorSecondary,
  ColorSuccess,
  ColorWarning,
} from './colors'

const theme = {
  colors: {
    success: ColorSuccess,
    primary: ColorPrimary,
    info: ColorInfo,
    warning: ColorWarning,
    danger: ColorDanger,
    secondary: ColorSecondary,
  },
  breakpoints: {
    xs: 0,
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
}

export { theme }
