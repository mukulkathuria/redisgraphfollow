import { Router } from "express";
import { getFollowers } from "../controller/follower.controller.js";
import { USERFOLLOWERROUTE } from "./routes.js";

const route = Router();

route.get(USERFOLLOWERROUTE, async (req, res) => {
  const { data, error } = await getFollowers(req.query, req.redis);
  if (data) {
    return res.json({ success: true, data });
  } else {
    return res.status(error.status).json({ messsage: error.messsage });
  }
});

export default route;
