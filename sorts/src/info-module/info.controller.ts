import { Request, Response } from "express";
import { InfoService } from "./info.service";

export class InfoController {
  private infoService: InfoService;

  constructor() {
    this.infoService = new InfoService();
  }

  async getSortTypes(req: Request, res: Response): Promise<void> {
    try {
      const sortTypes = await this.infoService.getSortTypes();
      res.json({ sortTypes });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
