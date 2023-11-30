import { Db } from "mongodb";
import Turma from "../models/turma";

class TurmaService {
  constructor(private readonly db: Db) {}

  async inserir(data: Turma) {
    const turma = this.db.collection("turma");
    await turma.insertOne(data);
  }

  getAll() {
    const turma = this.db.collection("turma");
    return turma.find().toArray();
  }
}

export default TurmaService;
