const axios = require("axios");

const requestHandler = (req) => {
  try{
    console.log("inside request handler for line webhook calling", data.toString());

    const res = axios({
      url: "https://api.line.me/v2/bot/message/reply",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.lineAccessToken
      },
      data: {
        replyToken: req.body.events.replyToken,
        messages: {
          type: "text",
          text: "Hello, This is cool!"
        }
      }
    })

  }catch(err){
    console.log("Error ocurred in requestHandler", err);
  }
}

module.exports = requestHandler;