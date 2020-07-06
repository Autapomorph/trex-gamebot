const { name, version } = require('../../package.json');

const { NODE_ENV } = process.env;

const isProd = NODE_ENV === 'production';
const isDev = NODE_ENV === 'development';

module.exports = {
  isProd,
  isDev,
  name,
  version,
};
