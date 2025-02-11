import { Router } from "express";
import generatingRoutes from "./generating-module/generating.routes";
import sortRoutes from "./sort-module/sort.routes";
import benchmarkRoutes from "./benchmark-module/benchmark.routes";

export class ApiRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.use("/sorting", sortRoutes);
    this.router.use("/generating", generatingRoutes);
    this.router.use("/benchmark", benchmarkRoutes);
  }
}

export default new ApiRouter().router;
