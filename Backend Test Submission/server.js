const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv");
const { Log } = require("./utils/logMiddleWare.js");

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// app.use(loggingMiddleware);

// Example route
// app.get("/api/hello", (req, res) => {
//   Log("backend", "debug", "handler", "Processing /api/hello route");
//   res.json({ message: "Hello from backend with logging!" });
// });







app.listen(port, () => {
//  Log("backend", "info", "service", `Backend running on port ${port}`);
  console.log(` Backend running on http://localhost:${port}`);
});