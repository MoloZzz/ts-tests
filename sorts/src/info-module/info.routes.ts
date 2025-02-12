import { Router } from "express";
import { InfoController } from "./info.controller";
import { asyncHandler } from "../errors/async-handler.middleware";

class InfoRoutes {
  public router: Router;
  private infoController: InfoController;

  constructor() {
    this.router = Router();
    this.infoController = new InfoController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      "/sort-types",
      asyncHandler((req, res, next) =>
        this.infoController.getSortTypes(req, res, next),
      ),
    );
  }
}

export default new InfoRoutes().router;
