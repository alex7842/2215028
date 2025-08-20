

const express = require("express");
const axios=require("axios")
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
const logRoutes=require("./routes/logRoutes")
app.use("/api/log",logRoutes)


app.use(cors());
app.listen(6000,() => {
    console.log("server started a 6000")

})

// export async function Log(stack, level, pkg, message) {
//   try {
//     await axios.post(LOG_API, {
//       stack,
//       level,
//       package: pkg,
//       message,
//     });
//     console.log(`✅ Logged -> [${stack}] [${level}] [${pkg}] ${message}`);
//   } catch (error) {
//     console.error("❌ Failed to send log:", error.message);
//   }
// }

// /**
//  * Express middleware to log every request/response
//  */
// export function loggingMiddleware(req, res, next) {
//   const start = Date.now();

//   res.on("finish", () => {
//     const duration = Date.now() - start;
//     const msg = `${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`;

//     Log("backend", "info", "route", msg);
//   });

//   next();
// }
