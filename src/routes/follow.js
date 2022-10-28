import { Router } from "express";
import { followUser } from "../controller/follow.controller.js";
import { USERFOLLOW } from "./routes.js";

const followRoute = Router();

followRoute.get(USERFOLLOW, async (req, res) => {
  const { data, error } = await followUser(req.query, req.redis);
  if (data) {
    return res.json({
      success: true,
      data,
    });
  } else {
    return res.status(error.status).json({ message: error.message });
  }
});

export default followRoute;
