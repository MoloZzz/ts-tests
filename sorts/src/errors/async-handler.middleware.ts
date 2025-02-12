import { Request, Response, NextFunction } from "express";

// Обгортання асинхронних функцій за допомогою asyncHandler,
// що дозволяє автоматично передавати помилки в error‑middleware.
export const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
