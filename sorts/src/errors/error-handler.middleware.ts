import { Request, Response, NextFunction } from "express";
import { ApiErrors } from "./api-errors";

//Останній, немає next()
export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (err instanceof ApiErrors) {
    res.status(err.status).json({ message: err.message });
    return;
  }
  res.status(500).json({ message: "Непередбачувана помилка!" });
}
