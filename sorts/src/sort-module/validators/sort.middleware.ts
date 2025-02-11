import { Request, Response, NextFunction } from "express";
import { SortType } from "../../common/enums";

export function validateSort(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const { array, type } = req.body;
  if (!Array.isArray(array) || typeof type !== "string") {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  if (!Object.values(SortType).includes(type as SortType)) {
    res
      .status(400)
      .json({ error: `Type of sorting "${type}" is not available` });
    return;
  }
  next();
}
