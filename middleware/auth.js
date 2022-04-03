const crypto = require("crypto");

const lineAuthVerifier = (req, res, next) => {
  console.log(JSON.stringify(req));
  const line_sign = req.headers['x-line-signature'];

  const channelSecret = process.env.lineChannelSecret;

  const my_sign = crypto.createHmac('SHA256', channelSecret).update(req.body).digest('base64');

  if(line_sign === my_sign){
    req.isLineSignatureVerified = true;
  }

  next();
}

module.exports = {
  lineAuthVerifier
}