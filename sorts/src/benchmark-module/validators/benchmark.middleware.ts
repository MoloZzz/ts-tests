import { Request, Response, NextFunction } from "express";

export function validateBenchmark(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  //Немає валідації, поки що
  next();
}
