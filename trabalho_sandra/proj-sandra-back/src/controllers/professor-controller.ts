import { Request, Response } from "express";
import RequestDB from "../models/request-db";
import ProfessorService from "../services/professor-service";
import Professor from "../models/professor";

class ProfessorController {
  static async InserirProfessor(req: Request, res: Response) {
    try {
      const db = (req as RequestDB).db;
      const professorService = new ProfessorService(db);

      let professor: Professor;

      const record = req.body;

      professor = record;

      await professorService.Inserir(professor);
      res.status(200).json({
        professor,
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  static async GetAllProfessores(req: Request, res: Response) {
    try {
      const db = (req as RequestDB).db;
      const professorService = new ProfessorService(db);

      res.status(200).json(await professorService.getAll());
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}

export default ProfessorController;
