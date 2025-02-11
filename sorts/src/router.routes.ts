import { Router } from "express";
import generatingRoutes from "./generating/generating.routes";
import sortRoutes from "./sort-module/sort.routes";

const apiRouter = Router();

apiRouter.use("/sorting", sortRoutes);
apiRouter.use("/generating", generatingRoutes);

export default apiRouter;
