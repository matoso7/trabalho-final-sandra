import express from "express";
import DisciplinaController from "../controllers/disciplina-controller";

const disciplinaRouter = express.Router();

disciplinaRouter.post("/", DisciplinaController.InserirDisciplina);
disciplinaRouter.get("/", DisciplinaController.GetAllDisciplinas);

export default disciplinaRouter;
