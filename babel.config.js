/* eslint-disable no-undef */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'targets': {
          'chrome': '49',
          'ios': '9'
        }
      }
    ],
    [
      '@babel/preset-typescript',
      {
        allExtensions: true, //支持所有文件扩展名
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        'regenerator': true
      }
    ]
  ],
};
