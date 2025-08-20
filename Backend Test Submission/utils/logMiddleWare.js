const axios = require("axios");

const Log = async (stack, level, package, message) => {
    try {
         console.log(`Logged locally -> [${stack}] [${level}] [${package}] ${message}`);
    const response = await axios.post('http://localhost:6000/api/log', {
      stack,
      level,
      package,
      message
    });
    
     console.log("loggied repsone",response.data)

        return response.data;
        
    
  } catch (error) {
    console.error("Failed to send log to local API:", error.message);

    return { 
      logID: "local-fallback", 
      message: "Logged locally due to API error" 
    };
  }
};

module.exports = {
  Log
};