import * as dotenv from "dotenv";
import express from "express";
import { ApiRouter } from "./api.routes";

dotenv.config();
const app = express();

app.use(express.json({ limit: "50mb" }));

app.use("/api", ApiRouter.getRouter());

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server is running on port http://localhost:${port}`),
);
