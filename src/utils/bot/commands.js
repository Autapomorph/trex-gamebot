const telegram = require('../../telegram');

const get = async () => {
  return telegram.getMyCommands();
};

const register = async commands => {
  return telegram.setMyCommands(commands);
};

const unregister = async () => {
  return telegram.setMyCommands([]);
};

module.exports = {
  get,
  register,
  unregister,
};
