import { Router } from "express";
import { GeneratingController } from "./generating.controller";
import { validateGenerateArray } from "./validators/generating.middleware";
import { asyncHandler } from "../errors/async-handler.middleware";

export class GeneratingRoutes {
  public router: Router;
  private generatingController: GeneratingController;

  constructor() {
    this.router = Router();
    this.generatingController = new GeneratingController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      "/generate-array",
      validateGenerateArray,
      asyncHandler((req, res, next) => {
        this.generatingController.generateRandomArray(req, res, next);
      }),
    );
  }
}

export default new GeneratingRoutes().router;
