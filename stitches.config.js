import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        primary: '#FF595C',
        violet800: 'hsl(252 62% 54.9%)',
      },
      space: {},
      fontSizes: {},
      fonts: {},
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {},
      shadows: {},
      zIndices: {},
      transitions: {},
    },
    media: {
      bp1: '(min-width: 480px)',
    },
    utils: {
      marginX: (value) => ({ marginLeft: value, marginRight: value }),
    },
    // prefix: 'kto',
    themeMap: {
      // List of default mapping -> https://bit.ly/3lLZnKb
      // Map these properties to the `space` scale
      // width: 'space',
      // height: 'space',
    },
  })

export const darkTheme = createTheme('dark-theme', {})
