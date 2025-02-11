import { Router } from "express";
import { InfoController } from "./info.controller";

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
      async (req, res) => await this.infoController.getSortTypes(req, res),
    );
  }
}

export default new InfoRoutes().router;
