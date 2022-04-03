const requestHandler = (data) => {
  try{
    console.log("inside request handler for line webhook calling", data.toString());
  }catch(err){
    console.log("Error ocurred in requestHandler", err);
  }
}

module.exports = requestHandler;