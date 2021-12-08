const { Telegraf } = require("telegraf");

const bot = new Telegraf("2065494194:AAHkhpguP6S1rsC7yZK7uPFcfKWvTrxNMTc", {
  polling: true,
});

bot.command("startID", (ctx) => {
  ctx.reply(ctx.message.chat.id);
});

const users = [
  { user: "isJako" },
  { user: "Johnny" },
  { user: "pedrolucaxz" },
  { user: "Furykinight" },
  { user: "reinxn" },
  { user: "squalize" },
  { user: "GusttaXyX" },
  { user: "Forge101" },
  { user: "luusqq" },
  { user: "onlymoreno" },
  { user: "le0sub" },
  { user: "HSLiba" },
  { user: "UmDesocupado" },
];

bot.command("rank", (ctx) => {
  const number = Math.floor(Math.random() * (101 - 0));
  const randomUser = Math.floor(Math.random() * users.length);
  const user = users[randomUser];

  const name =
    ctx.message.from.username === undefined
      ? ctx.message.from.first_name
      : ctx.message.from.username;
  ctx.reply(
    number >= 70
      ? `@${name} você é ${number}% corno, talvez o @${
          name === user.user
            ? users[Math.floor(Math.random() * users.length)].user
            : user.user
        } saiba algo sobre isso`
      : `@${name} você é ${number}% corno`
  );
});

bot.command("cinema", (ctx) => {
  const randomUser = Math.floor(Math.random() * users.length);
  const user = users[randomUser];
  const name =
    ctx.message.from.username === undefined
      ? ctx.message.from.first_name
      : ctx.message.from.username;
      console.log('deu certo')
  ctx.reply(
    `@${name} vai levar o @${
      name === user.user
        ? users[Math.floor(Math.random() * users.length)].user
        : user.user
    } para o cinema 🌹 `
  );
});

function inicializarBot() {
  bot.launch();
  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
}

module.exports = { inicializarBot, bot };
