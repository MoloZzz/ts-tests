import { Router } from "express";
import { GeneratingController } from "./generating.controller";
import { validateGenerating } from "./validators/generating.middleware";

export class GeneratingRoutes {
  public router: Router;
  private generatingController: GeneratingController;

  constructor() {
    this.router = Router();
    this.generatingController = new GeneratingController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/generate-array", validateGenerating, (req, res) =>
      this.generatingController.generateRandomArray(req, res),
    );
  }
}

export default new GeneratingRoutes().router;
