import { Db } from "mongodb";
import Professor from "../models/professor";

class ProfessorService {
  constructor(private readonly db: Db) {}

  async Inserir(data: Professor) {
    const professor = this.db.collection("professores");
    await professor.insertOne(data);
  }

  getAll() {
    const professor = this.db.collection("professores");
    return professor.find().toArray();
  }
}

export default ProfessorService;
