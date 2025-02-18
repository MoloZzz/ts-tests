import * as dotenv from "dotenv";
import express from "express";
import { ApiRouter } from "./api.routes";
import { errorHandler } from "./errors/error-handler.middleware";

dotenv.config();
const app = express();

app.use(express.json({ limit: "50mb" }));

app.use("/api", ApiRouter.getRouter());
app.use(errorHandler);

const port : number = Number(process.env.PORT) || 3000;
const host : string = '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
