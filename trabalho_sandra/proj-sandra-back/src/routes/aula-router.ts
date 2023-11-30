import express from "express";
import AulasController from "../controllers/aulas-controller";
const aulaRouter = express.Router();

aulaRouter.post("/", AulasController.InserirAula);
aulaRouter.get("/", AulasController.GetAll);

export default aulaRouter;
