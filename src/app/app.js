import express from "express";
import redisconnect from "../config/redis.js";
import dotenv from "dotenv";
import { default as followerRoute } from "../routes/followers.js";
import followRoute from "../routes/follow.js";

(async () => {
  try {
    dotenv.config();
    const app = express();
    const redisclient = await redisconnect();
    app.use((req, _, next) => {
      req.redis = redisclient;
      next();
    });
    app.use(followRoute);
    app.use(followerRoute);
    await app.listen(process.env.PORT || 5000);
    console.log("Server is running", process.env.PORT);
  } catch (error) {
    console.error(error?.message || error);
  }
})();
