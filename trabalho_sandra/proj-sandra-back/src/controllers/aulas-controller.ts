import { Request, Response } from "express";
import RequestDB from "../models/request-db";
import AulaService from "../services/aulas-service";
import Aula from "../models/aula";

class AulasController {
  static async InserirAula(req: Request, res: Response) {
    try {
      const db = (req as RequestDB).db;
      const aulaService = new AulaService(db);

      let aula: Aula;

      const record = req.body;

      aula = record;

      await aulaService.inserir(aula);

      res.status(200).json({
        aula,
      });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  static async GetAll(req: Request, res: Response) {
    try {
      const db = (req as RequestDB).db;
      const aulaService = new AulaService(db);

      res.status(200).json(await aulaService.getAll());
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}

export default AulasController;
