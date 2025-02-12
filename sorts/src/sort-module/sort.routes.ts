import { Router } from "express";
import { SortController } from "./sort.controller";
import { validateSort } from "./validators/sort.middleware";
import { asyncHandler } from "../errors/async-handler.middleware";

class SortRoutes {
  public router: Router;
  private sortController: SortController;

  constructor() {
    this.router = Router();
    this.sortController = new SortController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      "/sort",
      validateSort,
      asyncHandler((req, res, next) =>
        this.sortController.sortArray(req, res, next),
      ),
    );

    this.router.post(
      "/sort-generated-array",
      asyncHandler((req, res, next) =>
        this.sortController.sortGeneratedArray(req, res, next),
      ),
    );
  }
}

export default new SortRoutes().router;
