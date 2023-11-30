import express from "express";
import ProfessorController from "../controllers/professor-controller";

const profRouter = express.Router();

profRouter.post("/", ProfessorController.InserirProfessor);

profRouter.get("/", ProfessorController.GetAllProfessores);

export default profRouter;
