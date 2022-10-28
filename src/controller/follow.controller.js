import { EmailRegex } from "../constant/regex.contants.js";
import { getArrayValue } from "../utils/flattenArray.js";

export const followUser = async (query, redis) => {
  const { email, tofollow } = query;
  if (!email || typeof email !== "string" || !email.trim().length) {
    return { error: { status: 422, message: "Email is required" } };
  } else if (
    !tofollow ||
    typeof tofollow !== "string" ||
    !tofollow.trim().length
  ) {
    return { error: { status: 422, message: "Followee email is required" } };
  } else if (!EmailRegex.test(email)) {
    return { error: { status: 422, message: "Email is not valid" } };
  } else if (!EmailRegex.test(tofollow)) {
    return { error: { status: 422, message: "Followee email is not valid" } };
  } else if (email === tofollow) {
    return { error: { status: 409, message: "You cant follow yourself" } };
  }
  try {
    const relationExists = await redis.graph.query(
      "mygraph",
      `MATCH  (u1:USER { email: '${email}' }), (u2:USER { email: '${tofollow}' }) 
		RETURN EXISTS( (u1)-[:FOLLOWS]-(u2) )`
    );
    if (getArrayValue(relationExists.data)[0]) {
      return { error: { status: 409, message: "Already followed" } };
    }
    const data = await redis.graph.query(
      "mygraph",
      `MATCH (user1:USER { email: '${email}'}), (user2:USER { email:'${tofollow}'}) CREATE (user1) -[:FOLLOWS]->(user2)`
    );
    if (data.headers[0] === "Relationships created: 1") {
      return { data: { message: "Successfully created relation" } };
    } else {
      return { error: { status: 404, message: "User not exists" } };
    }
  } catch (error) {
    return { error: { status: 500, message: "Internal Server Error" } };
  }
};
