import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JSON_WEB_TOKEN_SECRET = process.env.JSON_WEB_TOKEN_SECRET;

const generateToken = (payload) =>
  jsonwebtoken.sign(payload, JSON_WEB_TOKEN_SECRET);

const autheticateToken = (req, res, next) => {
  const token = req.header.token;
  if (token) {
    jsonwebtoken.verify(token, JSON_WEB_TOKEN_SECRET, (err) => {
      if (err) res.sendStatus(400);
      next();
    });
  }
  res.sendStatus(400);
};

export { autheticateToken, generateToken };
