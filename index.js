const telegramBot = require("node-telegram-bot-api");
const bot = new telegramBot(process.env.TOKEN, { polling: true });
process.env.NTBA_FIX_319 = 1
bot.on("message", msg => {
  console.log(msg);
  bot.sendMessage(msg.chat.id, `Здорова ёпта, ${msg.from.first_name}`);
});
