import { Request, Response } from "express";
import RequestDB from "../models/request-db";
import TurmaService from "../services/turma-service";
import Turma from "../models/turma";

class TurmaController {
  static async InserirTurma(req: Request, res: Response) {
    try {
      const db = (req as RequestDB).db;
      const turmaService = new TurmaService(db);

      let turma: Turma;
      const record = req.body;

      turma = record;

      await turmaService.inserir(turma);

      res.status(200).json({
        turma,
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  static async GetAllTurmas(req: Request, res: Response) {
    try {
      const db = (req as RequestDB).db;
      const turmaService = new TurmaService(db);

      res.status(200).json(await turmaService.getAll());
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}

export default TurmaController;
