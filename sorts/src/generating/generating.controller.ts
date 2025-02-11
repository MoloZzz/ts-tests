import { Request, Response } from "express";
import { GeneratingService } from "./generating.service";

export class GeneratingController {
  private generatingService: GeneratingService;

  constructor() {
    this.generatingService = new GeneratingService();
  }

  async generateRandomArray(req: Request, res: Response): Promise<void> {
    try {
      const { length, max } = req.body;
      const generatedArray = await this.generatingService.generateRandomArray(
        length,
        max,
      );
      res.json({ generatedArray });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
