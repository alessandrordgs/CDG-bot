const express = require("express");
const app = express();
const Twit = require("twit");
const telegram = require('./telegramBot')

telegram.inicializarBot()
app.use(express.json());
const Twitter = new Twit({
  consumer_key: "U1TliEfoVKeZ1B08led3vOy7w",
  consumer_secret: "WoTIDRLf5NiffBWyA1WR52gYYEFLhBk65qmNsAuk1PigiVQrMB",
  access_token: "984468706691567616-4RFIlmfR9aEY6ykP1ytC5UVJapmjAII",
  access_token_secret: "R15guy9JUsDEN3kLRvhXUR8g295068TAxFzdJnTwibPBF",
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

// async function user(request, response) {
//   const userData = await Twitter.get(
//     "https://api.twitter.com/1.1/users/show.json?screen_name=forgeegms"
//   );
//   return response.json(userData.data.favourites_count);
// }


// async function algo(){
//   const userData = await Twitter.get("https://api.twitter.com/1.1/users/show.json?screen_name=pedrolucazsm");
//       console.log(userData.data.favourites_count)
//       curtidas = Number(userData.data.favourites_count) - 1
//       console.log(curtidas)
//       if (userData.data.favourites_count > (curtidas - 1) ) {
//         //  telegram.curtiuUmaFoto(userData.data.screen_name)
//       }
// }
// algo()
// setInterval(algo, 60000)

app.listen(3333, () => {
  console.log("server is running ");
});
