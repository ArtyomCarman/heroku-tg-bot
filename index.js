const telegramBot = require("node-telegram-bot-api");
const TOKET = "1119191635:AAF473wHb15z1ebiGtMQ_eva0NiPfgx-YB0";

const bot = new telegramBot(TOKET, {
  polling: true
});

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hi, ${msg.from.first_name}`)
})