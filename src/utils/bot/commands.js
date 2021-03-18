const get = telegram => async () => {
  return telegram.getMyCommands();
};

const register = telegram => async commands => {
  return telegram.setMyCommands(commands);
};

const unregister = telegram => async () => {
  return telegram.setMyCommands([]);
};

module.exports = {
  get,
  register,
  unregister,
};
