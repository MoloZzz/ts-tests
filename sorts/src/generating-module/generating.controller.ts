import { NextFunction, Request, Response } from "express";
import { GeneratingService } from "./generating.service";

export class GeneratingController {
  private generatingService: GeneratingService;

  constructor() {
    this.generatingService = new GeneratingService();
  }

  generateRandomArray = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { length, max } = req.body;
    const generatedArray = await this.generatingService.generateRandomArray(
      length,
      max,
    );
    res.json({ generatedArray });
  };
}
