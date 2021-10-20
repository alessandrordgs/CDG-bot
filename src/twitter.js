const Twit = require("twit");
const telegram = require('./telegramBot')

const Twitter = new Twit({
  consumer_key: "U1TliEfoVKeZ1B08led3vOy7w",
  consumer_secret: "WoTIDRLf5NiffBWyA1WR52gYYEFLhBk65qmNsAuk1PigiVQrMB",
  access_token: "984468706691567616-4RFIlmfR9aEY6ykP1ytC5UVJapmjAII",
  access_token_secret: "R15guy9JUsDEN3kLRvhXUR8g295068TAxFzdJnTwibPBF",
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

async function algo(){
  const userData = await Twitter.get("https://api.twitter.com/1.1/users/show.json?screen_name=pedrolucazsm");
      console.log(userData.data.favourites_count)
     
      if (userData.data.favourites_count > userData.data.favourites_count) {
         telegram.curtiuUmaFoto(userData.data.screen_name)
      }
}

module.exports = {
  algo
}