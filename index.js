const telegramBot = require("node-telegram-bot-api");
const TOKEN = require("./token.js");
const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer();
server.listen(PORT);

const bot = new telegramBot(TOKEN, { polling: true });

bot.on("message", msg => {
  console.log(msg);
  if (msg.from.id !== 533139971) {
    bot.sendMessage(msg.chat.id, `Извини, но ты лох`);
  }
  bot.sendMessage(msg.chat.id, `Здорова ёпта, ${msg.from.first_name}`);
});
