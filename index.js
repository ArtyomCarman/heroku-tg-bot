process.env.NTBA_FIX_319 = 1;

const TOKEN = process.env.TOKEN;
const TelegramBot = require("node-telegram-bot-api");
const options = {
  webHook: {
    port: process.env.PORT
  }
};
const url = process.env.APP_URL || 'https://heroku-tg-botik.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options);


bot.setWebHook(`${url}/bot${TOKEN}`);


bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Здарова ${msg.chat.first_name}`);
});