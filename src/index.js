const express = require("express");
const app = express();
const {algo } = require('./twitter')
const {mongodb} = require('./moongose')
const telegram = require('./telegramBot')

telegram.inicializarBot()
app.use(express.json());


// async function user(request, response) {
//   const userData = await Twitter.get(
//     "https://api.twitter.com/1.1/users/show.json?screen_name=forgeegms"
//   );
//   return response.json(userData.data.favourites_count);
// }

// algo()
// setInterval(algo, 60000)

app.post("/mongo", mongodb )

app.listen(3333, () => {
  console.log("server is running ");
});
