import { EmailRegex } from "../constant/regex.contants.js";
import { getArrayValue } from "../utils/flattenArray.js";

export const getFollowers = async (query, redis) => {
  const { email } = query;
  if (!email || typeof email !== "string" || !email.trim().length) {
    return { error: { status: 422, message: "Email is required" } };
  } else if (!EmailRegex.test(email)) {
    return { error: { status: 422, message: "Email is not valid" } };
  }
  try {
    const data = await redis.graph.query(
      "mygraph",
      `MATCH (:USER { email: '${email}' } ) -[:FOLLOWS]-> (u2:USER) return u2.name AS Name`
    );
    if (data.data?.length) {
      return { data: { headers: "Name", data: getArrayValue(data.data) } };
    } else {
      return { error: { status: 404, message: "No Data found" } };
    }
  } catch (error) {
    return { error: { status: 500, message: "Internal Server Error" } };
  }
};
