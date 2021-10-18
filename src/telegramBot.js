const { Telegraf } = require("telegraf");

const bot = new Telegraf("2065494194:AAHkhpguP6S1rsC7yZK7uPFcfKWvTrxNMTc", {
  polling: true,
});

async function curtiuUmaFoto(nome) {
  const msg = `${nome} acabou de enviar uma 🌹 para alguém`;
  bot.telegram.sendMessage("-1001268721063", msg);
}

bot.command("startID", (ctx) => {
  ctx.reply(ctx.message.chat.id);
});

bot.command("rank", (ctx) => {
  const number = Math.floor(Math.random() * (100 - 0));
  const name =
    ctx.message.from.username === undefined
      ? ctx.message.from.first_name
      : ctx.message.from.username;
  console.log(name);
  ctx.reply(
    number > 70
      ? `@${name} você é ${number}% corno, talvez o Johnny saiba algo sobre isso`
      : `@${name} você é ${number}% corno`
  );
});



function inicializarBot() {
  bot.launch();
  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
}

module.exports = { curtiuUmaFoto, inicializarBot };
