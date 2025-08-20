const axios = require("axios");

const logData = async (req, res) => {
  const { stack, level, package, message } = req.body;
  
  if (!stack || !level || !package || !message) {
    return res.status(400).json({ error: "stack, level, package, and message are required fields" });
  }
 
  try {
    const response = await axios.post(process.env.LOG_API, {
      stack,
      level,
      package,
      message,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
      }
    });
    
    console.log(` Logged -> [${stack}] [${level}] [${package}] ${message}`);
     console.log(`Response Log `,response.data)

    res.status(200).json({
      message: "Log sent successfully",
      data: response.data
    });
    
  } catch (error) {
    console.error(" Failed to send log:", error.message);
    res.status(500).json({ 
      message: "Failed to send log", 
      error: error.message 
    });
  }
};

module.exports = {
  logData,
};