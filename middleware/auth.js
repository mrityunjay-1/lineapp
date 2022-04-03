const lineAuthVerifier = (req, res, next) => {
  console.log("Inside lineAuth Verifier\n".repeat(50), req.body);

  next();
}

module.exports = {
  lineAuthVerifier
}