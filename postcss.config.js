/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const path = require('path');
 
module.exports = ({ file }) => {
  // console.log(11111111,file);
  const designWidth = file.includes(path.join('node_modules', 'antd-mobile')) ? 375 : 750;
  // const designWidth = 750;
 
  return {
    plugins: {
      autoprefixer: {},
      'postcss-px-to-viewport': {
        unitToConvert: 'px',
        viewportWidth: designWidth,
        unitPrecision: 6,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: true,
        exclude: [],
        landscape: false
      }
    }
  }
}