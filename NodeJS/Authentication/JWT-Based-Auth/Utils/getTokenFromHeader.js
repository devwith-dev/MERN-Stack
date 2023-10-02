const getTokenFromHeader = (req) => {
  //1.Get the token from header
  const headerObject = req.headers;
  //get token by splitting the auth header value and neglecting 'Bearer'
  const token = headerObject["authorization"].split(" ")[1];
  if(token!==undefined){
    return token
  }
  return{
    status:"Failed",
    message:"There is no token attached to the header"
  }
};

module.exports = getTokenFromHeader;
