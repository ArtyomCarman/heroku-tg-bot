process.env.NTBA_FIX_319 = 1;

const TOKEN = process.env.TOKEN;
const TelegramBot = require("node-telegram-bot-api");
const request = require("request");
const cheerio = require("cheerio");

const options = {
  webHook: {
    port: process.env.PORT,
  },
};
const url = process.env.APP_URL || "https://heroku-tg-botik.herokuapp.com:443";
const bot = new TelegramBot(TOKEN, options);

bot.setWebHook(`${url}/bot${TOKEN}`);

bot.onText("//start/", (msg) => {
  const text = `Ку, ${msg.chat.first_name}\nЧего хочешь?`;
  bot.sendMessage(msg.chat.id, text, {
    reply_markup: {
      keyboard: [["Огромный член", "Расписание звонков"]],
    },
  });
});

bot.on("message", (msg) => {
  switch (msg.text) {
    case "Огромный член":
      bot.sendMessage(
        msg.chat.id,
        "Ну, а кто не хочет?\nРиторический вопрос..."
      );
      break;
    case "расписание звонков":
      bot.sendMessage(msg.chat.id, parsingYatt());
      break;
  }
});

const parsingYatt = () => {
  const URL2 = "https://yatt.framework.team/dashboard";
  return request(URL2, (err, res, body) => {
    if (err) throw err;
    let $ = cheerio.load(body);
    let title = $("title");
    return title.text();
  });
};
