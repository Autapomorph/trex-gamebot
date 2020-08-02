const Markup = require('telegraf/markup');
const Extra = require('telegraf/extra');

module.exports = Extra.markup(
  Markup.inlineKeyboard([
    Markup.gameButton('🎮 Play Dino!'),
    Markup.switchToChatButton('↩️ Share with friends', 'play'),
  ]),
);
