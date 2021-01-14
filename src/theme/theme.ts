enum ColorSuccess {
  DARK = '#2b542c',
  MAIN = '#3c763d',
  LIGHT = '#67b168',
  CONTRAST = '#dff0d8',
}

enum ColorPrimary {
  DARK = '#003230',
  MAIN = '#006560',
  LIGHT = '#007e78',
  CONTRAST = '#00cbc1',
}

enum ColorInfo {
  DARK = '#3145b7',
  MAIN = '#415d9a',
  LIGHT = '#708ac2',
  CONTRAST = '#b8c5e0',
}

enum ColorWarning {
  DARK = '#66512c',
  MAIN = '#8a6d3b',
  LIGHT = '#c0a16b',
  CONTRAST = '#fcf8e3',
}

enum ColorDanger {
  DARK = '#843534',
  MAIN = '#a94442',
  LIGHT = '#ce8483',
  CONTRAST = '#f2dede',
}

enum ColorSecondary {
  DARK = '#333333',
  MAIN = '#777777',
  LIGHT = '#cccccc',
  CONTRAST = '#ffffff',
}

const colors = {
  success: ColorSuccess,
  primary: ColorPrimary,
  info: ColorInfo,
  warning: ColorWarning,
  danger: ColorDanger,
  secondary: ColorSecondary,
}

const theme = {
  colors,
}

export { theme }
