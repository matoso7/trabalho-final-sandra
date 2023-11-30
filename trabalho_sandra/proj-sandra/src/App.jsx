import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Header from "./components/Header";
import { API_URL } from "./constants";

function App() {
  const [qtdDias, setQtdDias] = useState(0);
  const [inicioAulas, setInicioAulas] = useState(null);
  const [fimAulas, setFimAulas] = useState(null);
  const [professores, setProfessores] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);
  const [turmas, setTurmas] = useState([]);
  const [professorId, setProfessorId] = useState(null);
  const [turmaId, setTurmaId] = useState(null);
  const [disciplinaId, setDisciplinaId] = useState(null);
  const [aulas, setAulas] = useState([]);

  const handleSubmitAula = async (e) => {
    e.preventDefault();

    if (inicioAulas && fimAulas) {
      await axios
        .post(`${API_URL}/aulas`, {
          professorId: professorId,
          disciplinaId: disciplinaId,
          turmaId: turmaId,
          quantidadeDias: qtdDias,
          dataInicio: inicioAulas,
          dataFim: fimAulas,
        })
        .then((response) => {
          response.status === 200
            ? toast.success("Aula criada com sucesso!")
            : toast.error("Erro ao cadastrar");
        });
    }
  };

  const handleQtdDiasChange = (e) => {
    const dias = parseInt(e.target.value, 10);
    setQtdDias(dias);

    if (!isNaN(dias) && inicioAulas) {
      calcularFimAulas(inicioAulas, dias);
    }
  };

  const handleInicioAulasChange = (e) => {
    const inicio = new Date(e.target.value);

    setInicioAulas(inicio);

    if (!isNaN(qtdDias)) {
      calcularFimAulas(inicio, qtdDias);
    }
  };

  const calcularFimAulas = (inicio, dias) => {
    const fim = new Date(inicio);
    fim.setDate(inicio.getDate() + dias);

    while (fim.getDay() === 0 || fim.getDay() === 6) {
      fim.setDate(fim.getDate() + 1);
    }

    const formatoData = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    setFimAulas(fim.toLocaleDateString("pt-br", formatoData));
  };

  /* Get dados */
  const handleGetProfessores = async () => {
    try {
      const response = await axios.get(`${API_URL}/professor`);
      setProfessores(response.data);
    } catch (error) {
      console.error("Erro ao obter professores:", error);
    }
  };

  const handleGetTurmas = async () => {
    try {
      const response = await axios.get(`${API_URL}/turma`);
      setTurmas(response.data);
    } catch (error) {
      console.error("Erro ao obter turmas:", error);
    }
  };

  const handleGetDisciplinas = async () => {
    try {
      const response = await axios.get(`${API_URL}/disciplina`);
      setDisciplinas(response.data);
    } catch (error) {
      console.error("Erro ao obter disciplinas:", error);
    }
  };

  const formatarData = (data) => {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
  };

  const handleGetAulas = async () => {
    const response = await axios.get(`${API_URL}/aulas`);
    setAulas(response.data);
  };

  useEffect(() => {
    handleGetProfessores();
    handleGetDisciplinas();
    handleGetTurmas();
    handleGetAulas();
  }, []);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-screen-lg mt-5">
        <h1 className="font-bold text-2xl">Lista de Professores</h1>
        <div className="flex gap-10 mt-10">
          <section className="w-full flex-1 bg-zinc-700 p-5 rounded-lg shadow-xl">
            <h1 className="text-center text-white text-2xl my-3">
              Cadastro de Professores
            </h1>
            <form className="flex flex-col gap-3" onSubmit={handleSubmitAula}>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-white">
                  Professor
                </label>
                <select
                  placeholder="selecione um professor"
                  className="p-2 outline-none"
                  onChange={(e) => {
                    setProfessorId(e.target.value);
                  }}
                >
                  <option value="" selected disabled>
                    Selecione um professor
                  </option>
                  {professores &&
                    professores.map((prof) => (
                      <option value={prof.nome} key={prof._id}>
                        {prof.nome}
                      </option>
                    ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-white">
                  Turma
                </label>
                <select
                  placeholder="selecione uma turma"
                  className="p-2 outline-none"
                  onChange={(e) => {
                    setTurmaId(e.target.value);
                  }}
                >
                  <option value="" selected disabled>
                    Selecione uma turma
                  </option>
                  {turmas &&
                    turmas.map((tur) => (
                      <option value={tur.nome} key={tur._id}>
                        {tur.nome}
                      </option>
                    ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-white">
                  Disciplina
                </label>
                <select
                  placeholder="selecione uma Disciplina"
                  className="p-2 outline-none"
                  onChange={(e) => {
                    setDisciplinaId(e.target.value);
                  }}
                >
                  <option value="" selected disabled>
                    Selecione uma disciplina
                  </option>
                  {disciplinas &&
                    disciplinas.map((disc) => (
                      <option value={disc.nome} key={disc._id}>
                        {disc.nome}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-white">
                  Quantidade de Dias
                </label>
                <input
                  type="number"
                  placeholder="digite a quantidade de dias"
                  className="p-2 outline-none"
                  onChange={handleQtdDiasChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-white">
                  Data de Inicio das Aulas
                </label>
                <input
                  type="date"
                  placeholder="digite a data de inicio das aulas"
                  className="p-2 outline-none"
                  value={inicioAulas ? formatarData(inicioAulas) : ""}
                  onChange={handleInicioAulasChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-white">
                  Fim das aulas:
                </label>
                <input
                  type="text"
                  value={fimAulas || ""}
                  className="p-2 outline-none"
                  readOnly
                />
              </div>
              <button className="text-white bg-green-500 p-2 rounded-lg">
                Cadastrar
              </button>
            </form>
          </section>
          <section className="w-full flex-1">
            <div className=" h-96  bg-slate-400 p-5 rounded-lg">
              {aulas.map((aula) => (
                <div
                  key={aula._id}
                  className="w flex gap-5 justify-between items-center border-white border rounded-md p-3"
                >
                  <div className="flex flex-col">
                    <h1 className="text-center text-black text-base my-1">
                      {aula.turmaId}
                    </h1>
                    <h1 className="text-center text-black text-base my-1">
                      {aula.disciplinaId}
                    </h1>
                    <h1 className="text-center text-black text-base my-1">
                      {aula.professorId}
                    </h1>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-center text-black text-base my-1">
                      {aula.quantidadeDias}
                    </h1>
                    <h1 className="text-center text-black text-base my-1">
                      {new Date(aula.dataInicio).toLocaleDateString("pt-BR")}
                    </h1>
                    <h1 className="text-center text-black text-base my-1">
                      {new Date(aula.dataFim).toLocaleDateString("pt-BR")}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
