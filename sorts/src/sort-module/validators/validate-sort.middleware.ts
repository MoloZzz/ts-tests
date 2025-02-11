import { Request, Response, NextFunction } from "express";

export function validateSort(req: Request, res: Response, next: NextFunction): void {
    const { array, type } = req.body;
    if (!Array.isArray(array) || typeof type !== "string") {
        res.status(400).json({ error: "Invalid input" });
        return;
    }
    next();
}
