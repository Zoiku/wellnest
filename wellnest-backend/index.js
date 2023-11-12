import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { router } from "./routes.js";
import bodyParser from "body-parser"

dotenv.config();

const listening = () => console.log(`Listening at ${port}`);
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/", router);

app.listen(port, listening);