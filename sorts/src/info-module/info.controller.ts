import { NextFunction, Request, Response } from "express";
import { InfoService } from "./info.service";

export class InfoController {
  private infoService: InfoService;

  constructor() {
    this.infoService = new InfoService();
  }

  getSortTypes = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const sortTypes = await this.infoService.getSortTypes();
    res.json({ sortTypes });
  };
}
