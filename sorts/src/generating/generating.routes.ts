import { Router } from "express";
import { GeneratingController } from "./generating.controller";
import { validateGenerating } from "./validators/generating.middleware";

const generatingRoutes = Router();
const generatingController = new GeneratingController();

generatingRoutes.post("/generate-array", validateGenerating, (req, res) =>
  generatingController.generateRandomArray(req, res),
);

export default generatingRoutes;
