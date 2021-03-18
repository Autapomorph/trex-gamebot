const { Markup } = require('telegraf');

module.exports = Markup.inlineKeyboard([
  Markup.button.game('🎮 Play Dino!'),
  Markup.button.switchToChat('↩️ Share with friends', 'play'),
]);
