import { Request, Response } from "express";
import { SortService } from "./sort.service";

export class SortController {
  private sortService: SortService;

  constructor() {
    this.sortService = new SortService();
  }

  async sortArray(req: Request, res: Response): Promise<void> {
    try {
      const { array, type } = req.body;
      const sortedArray = await this.sortService.sort(array, type);
      res.json({ sortedArray });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async sortGeneratedArray(req: Request, res: Response): Promise<void> {
    try {
      const { length, type, max } = req.body;
      const sortedArray = await this.sortService.sortRandomArray(
        type,
        length,
        max,
      );
      res.json({ sortedArray });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
