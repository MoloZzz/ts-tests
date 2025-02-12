import { Request, Response, NextFunction } from "express";
import { SortService } from "./sort.service";

export class SortController {
  private sortService: SortService = new SortService();

  sortArray = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { array, type } = req.body;
    const sortedArray = await this.sortService.sort(array, type);
    res.json({ sortedArray });
  };

  sortGeneratedArray = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { length, type, max } = req.body;
    const sortedArray = await this.sortService.sortRandomArray(
      type,
      length,
      max,
    );
    res.json({ sortedArray });
  };
}
