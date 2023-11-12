import express from "express";
import { therapists, patients } from "./db/users.js";

const router = express.Router();

router.get("/", (_, res) => {
  res.sendStatus(200);
});

router.post("/patient/login", (req, res) => {
  const { email, password } = req.body;
  const patient = patients.find((patient) => patient.email === email);
  if (patient && patient.password === password) {
    res.json(patient);
  } else {
    res.sendStatus(401);
  }
});

router.get("/therapists", (_req, res) => {
  res.json(therapists);
});

export { router };
