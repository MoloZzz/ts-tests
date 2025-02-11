import * as dotenv from "dotenv";
import express from "express";
import sortRoutes from "./sort-module/sort.routes";

dotenv.config();
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use("/api", sortRoutes);
export default app;