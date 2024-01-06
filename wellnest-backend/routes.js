import express from "express";
import { users } from "./db/users.js";

const router = express.Router();

router.get("/", (_, res) => {
  res.sendStatus(200);
});

router.post("/login", (req, res) => {
  const { email, password, role } = req.body;
  const result = users[role].find((user) => user.email === email);
  if (result && result.password === password) {
    res.json(result);
  } else {
    res.sendStatus(401);
  }
});

router.get("/therapists", (_req, res) => {
  res.json(users.therapist);
});

export { router };
