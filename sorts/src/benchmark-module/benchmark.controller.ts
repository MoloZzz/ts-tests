import { Request, Response } from "express";

export class BenchmarkController {
  public async runBenchmark(req: Request, res: Response): Promise<Response> {
    try {
      const start = performance.now();

      const array = Array.from({ length: 1000000 }, () =>
        Math.floor(Math.random() * 1000000),
      );
      array.sort((a, b) => a - b);

      const end = performance.now();
      return res.json({ executionTime: `${(end - start).toFixed(2)} ms` });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Benchmark failed", details: error });
    }
  }
}
