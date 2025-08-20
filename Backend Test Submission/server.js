const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv");
const { Log } = require("./utils/logMiddleWare.js");
const urlRoutes = require("./routes/urlRoutes");
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/", urlRoutes);

app.listen(port, () => {
 
    
  console.log(` Backend running on http://localhost:${port}`);
});

