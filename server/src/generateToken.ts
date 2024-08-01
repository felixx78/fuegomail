import jwt from "jsonwebtoken";

const options = {
  refresh: { expiresIn: "90d" },
  access: { expiresIn: "1h" },
};

export default async function generateToken(
  payload: object,
  type: "refresh" | "access"
) {
  const secret =
    type === "refresh" ? process.env.REFRESH_SECRET : process.env.ACCESS_SECRET;

  return jwt.sign(payload, secret!, options[type]);
}
