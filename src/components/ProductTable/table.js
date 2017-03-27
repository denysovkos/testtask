import React, {StyleSheet, Dimensions, PixelRatio} from 'react-native'
const {width, height, scale} = Dimensions.get('window'),
  vw = width / 100,
  vh = height / 100,
  vmin = Math.min(vw, vh),
  vmax = Math.max(vw, vh)

export default StyleSheet.create({
  'body': {
    'font': "1em/1.67 'Open Sans', Arial, Sans-serif",
    'marginTop': 0,
    'marginRight': 0,
    'marginBottom': 0,
    'marginLeft': 0,
    'background': '#e9e9e9'
  },
  'wrapper': {
    'width': '95%',
    'marginTop': 3,
    'marginRight': 'auto',
    'marginBottom': 3,
    'marginLeft': 'auto'
  },
  'masonry': {
    'marginTop': 1.5,
    'marginRight': 0,
    'marginBottom': 1.5,
    'marginLeft': 0,
    'paddingTop': 0,
    'paddingRight': 0,
    'paddingBottom': 0,
    'paddingLeft': 0,
    'MozColumnGap': 1.5,
    'WebkitColumnGap': 1.5,
    'columnGap': 1.5,
    'fontSize': 0.85
  },
  'item': {
    'display': 'inline-block',
    'background': '#fff',
    'paddingTop': 1,
    'paddingRight': 1,
    'paddingBottom': 1,
    'paddingLeft': 1,
    'marginTop': 0,
    'marginRight': 0,
    'marginBottom': 1.5,
    'marginLeft': 0,
    'width': '100%',
    'boxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'WebkitBoxSizing': 'border-box',
    'boxShadow': '2px 2px 4px 0 #ccc'
  }
})