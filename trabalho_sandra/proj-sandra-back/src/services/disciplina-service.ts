import { Db } from "mongodb";
import Disciplina from "../models/disciplina";

class DisciplinaService {
  constructor(private readonly db: Db) {}

  async inserir(data: Disciplina) {
    const disciplina = this.db.collection("disciplina");
    await disciplina.insertOne(data);
  }

  getAll() {
    const disciplina = this.db.collection("disciplina");
    return disciplina.find().toArray();
  }
}

export default DisciplinaService;
