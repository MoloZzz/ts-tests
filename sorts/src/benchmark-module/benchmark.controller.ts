import { Request, Response } from "express";
import { BenchmarkService } from "./benchmark.service";

export class BenchmarkController {
  benchmarkService: BenchmarkService;
  constructor() {
    this.benchmarkService = new BenchmarkService();
  }
  public async runBenchmark(req: Request, res: Response): Promise<void> {
    //Поки що не реалізовано
  }
}
