import dotenv from "dotenv";
import express from "express";

dotenv.config();

const portOpen = () => console.log("Listening");
const app = express();
const port = process.env.PORT;
app.listen(port, portOpen);
