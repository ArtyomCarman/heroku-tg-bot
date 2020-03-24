const telegramBot = require("node-telegram-bot-api");
const TOKEN = "1119191635:AAF9MKaGsofAVC_R1y17ObBO6jEK9Usuu6s"
const bot = new telegramBot(TOKEN, { polling: true });

bot.on("message", msg => {
  console.log(msg);
  if (msg.from.id !== 533139971) {
    bot.sendMessage(msg.chat.id, `Извини, но ты лох`);
  }
  bot.sendMessage(msg.chat.id, `Здорова ёпта, ${msg.from.first_name}`);
});
