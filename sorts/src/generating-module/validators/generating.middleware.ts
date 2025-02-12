import { Request, Response, NextFunction } from "express";

export function validateGenerateArray(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const { length, max } = req.body;
  if (typeof length !== "number") {
    res.status(400).json({ error: "Invalid input" });
    return;
  }
  next();
}
