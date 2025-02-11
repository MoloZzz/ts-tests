import { Router } from "express";
import { SortController } from "./sort.controller";
import { validateSort } from "./validators/sort.middleware";

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
      async (req, res) => await this.sortController.sortArray(req, res),
    );
    this.router.post(
      "/sort-generated-array", async (req, res) => await this.sortController.sortGeneratedArray(req, res),
    );
  }
}

export default new SortRoutes().router;
