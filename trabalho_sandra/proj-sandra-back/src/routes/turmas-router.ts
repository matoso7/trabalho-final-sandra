import express from "express";
import TurmaController from "../controllers/turma-controller";

const turmaRouter = express.Router();

turmaRouter.post("/", TurmaController.InserirTurma);
turmaRouter.get("/", TurmaController.GetAllTurmas);

export default turmaRouter;
