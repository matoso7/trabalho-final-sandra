import express from "express";
import routers from "./routes";
import database from "./db";
import cors from "cors";

/*
 * Cadastro de professores [*]
 * Cadastro de Turmas [*]
 * Cadastro de Disciplinas [*]
 * Cadastro de Horário []
 *
 *
 */

const main = async () => {
  const port = 3001;
  const app = express();

  app.use(cors());
  app.use(express.json());
  await database.injectDBInApp(app);

  app.use("/professor", routers.profRouter);
  app.use("/turma", routers.turmaRouter);
  app.use("/disciplina", routers.disciplinaRouter);
  app.use("/aulas", routers.aulaRouter);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port} 🚀`);
  });
};

main();
