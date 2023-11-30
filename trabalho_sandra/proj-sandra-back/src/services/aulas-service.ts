import { Db } from "mongodb";
import Aula from "../models/aula";

class AulaService {
  constructor(private readonly db: Db) {}

  async inserir(data: Aula) {
    const aula = this.db.collection("aulas");
    await aula.insertOne(data);
  }

  async getAll() {
    const aulaCollection = this.db.collection("aulas");

    return await aulaCollection.find().toArray();
  }
}

export default AulaService;
