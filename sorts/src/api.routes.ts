import { Router } from "express";
import benchmarkRoutes from "./benchmark-module/benchmark.routes";
import generateRoutes from "./generating-module/generating.routes";
import sortRoutes from "./sort-module/sort.routes";
import infoRoutes from "./info-module/info.routes";

export class ApiRouter {
  public static getRouter(): Router {
    const router = Router();

    router.use("/sorting", sortRoutes);
    router.use("/generating", generateRoutes);
    router.use("/benchmarking", benchmarkRoutes);
    router.use("/info", infoRoutes);
    return router;
  }
}
