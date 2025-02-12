import { Router } from "express";
import { BenchmarkController } from "./benchmark.controller";

export class BenchmarkRoutes {
  public router: Router;
  private benchmarkController: BenchmarkController;

  constructor() {
    this.router = Router();
    this.benchmarkController = new BenchmarkController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    //Поки що відсутні
  }
}

export default new BenchmarkRoutes().router;
