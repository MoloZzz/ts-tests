import { Router } from "express";
import { SortController } from "./sort.controller";
import { validateSort } from "./validators/validate-sort.middleware";

const sortRoutes = Router();
const sortController = new SortController();

sortRoutes.post("/sort", validateSort, (req, res) => sortController.sortArray(req, res));

export default sortRoutes;
