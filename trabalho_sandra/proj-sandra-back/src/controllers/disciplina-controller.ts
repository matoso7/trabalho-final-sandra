import { Request, Response } from "express";
import DisciplinaService from "../services/disciplina-service";
import RequestDB from "../models/request-db";
import Disciplina from "../models/disciplina";

class DisciplinaController {
  static async InserirDisciplina(req: Request, res: Response) {
    try {
      const db = (req as RequestDB).db;
      const disciplinaService = new DisciplinaService(db);

      let disciplina: Disciplina;

      const record = req.body;

      disciplina = record;

      await disciplinaService.inserir(disciplina);

      res.status(200).json({
        disciplina,
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  static async GetAllDisciplinas(req: Request, res: Response) {
    try {
      const db = (req as RequestDB).db;
      const disciplinaService = new DisciplinaService(db);

      res.status(200).json(await disciplinaService.getAll());
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}

export default DisciplinaController;
