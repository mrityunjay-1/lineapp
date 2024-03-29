const axios = require("axios");

const requestHandler = async (req) => {
  try {

    console.log("Incoming line webhook data...\n".repeat(10), JSON.stringify(req.body, null, 4));

    const res = await axios({
      url: "https://api.line.me/v2/bot/message/reply",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.lineAccessToken
      },
      data: {
        replyToken: req.body.events[0].replyToken,
        messages: [{
          type: "text",
          text: req.body.events[0].message.text
        }]
      }
    });

  } catch (err) {
    console.log("Error ocurred in requestHandler", err);
  }
}

module.exports = requestHandler;