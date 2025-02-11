import * as dotenv from "dotenv";
import express from "express";
import apiRouter from "./router.routes";

dotenv.config();
const app = express();

app.use("/api", apiRouter);
app.use(express.json({ limit: "50mb" }));

export default app;
