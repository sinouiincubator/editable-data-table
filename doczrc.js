/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import url from 'url';
import packageInfo from './package.json';
import proxyPlugin from './scripts/proxy-plugin';

/**
 * 获取基本URL
 */
function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    const { name, homepage } = packageInfo;

    if (homepage) {
      return url.parse(homepage).path;
    }
    if (name.startsWith('@')) {
      return name.substr(name.indexOf('/'));
    }
    return `/${name}`;
  }
  return '/';
}

export default {
  title: 'editable-data-table',
  codeSandbox: false,
  typescript: true,
  files: ['**/*.mdx'],
  public: './docs/assets',
  menu: [
    '开始',
    '单元格编辑器',
    '组件API',
    '校验',
    '样式定制',
    '分页加载数据',
    {
      name: '分页展示数据',
      menu: [
        '开始',
        '完整示例',
        '加载并展示数据',
        '新增、编辑与删除',
        '校验',
        '查询',
        '选择数据行',
      ],
    },
  ],
  wrapper: 'docs/Wrapper.tsx',
  indexHtml: 'docs/index.html',
  base: getBaseUrl(),
  plugins: [proxyPlugin()],
  onCreateWebpackChain: (config) => {
    // 配置webpack的方式：[webpack-chain](https://github.com/neutrinojs/webpack-chain)

    config.module
      .rule('css')
      .test(/\.css$/)
      .use('style-loader')
      .loader('style-loader')
      .end()
      .use('css-loader')
      .loader('css-loader')
      .options({
        importLoaders: 1,
      })
      .end()
      .use('postcss-loader')
      .loader('postcss-loader')
      .options({
        plugins: (loader) => [
          require('postcss-import')({ root: loader.resourcePath }),
          require('postcss-preset-env')({
            browsers: ['last 2 versions', 'not dead', 'IE 10', 'IE 11'],
          }),
        ],
      })
      .end();

    config
      .plugin('ghpages')
      .use(require('webpack-docz-ghpages-plugin'))
      .end();

    return config;
  },
};
