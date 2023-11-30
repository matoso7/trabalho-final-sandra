import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { API_URL } from "../constants";
import { toast } from "react-toastify";

const CadastroDisciplinas = () => {
  const [disciplina, setDisciplina] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();

    await axios
      .post(`${API_URL}/disciplina`, {
        nome: disciplina,
      })
      .then((response) => {
        response.status === 200
          ? toast.success("Disciplina criada com sucesso!")
          : toast.error("Erro ao cadastrar");
      });
    setDisciplina("");
  };
  return (
    <>
      <Header />
      <main className="">
        <div className="absolute transform -translate-x-1/2 max-w-md w-full -translate-y-1/2 rounded-lg bg-zinc-600 top-1/2 left-1/2">
          <form onSubmit={handleChange} className="flex flex-col p-10 ">
            <h1 className="text-2xl text-white">Cadastro de Disciplina</h1>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="" className="text-white">
                Nome da Disciplina
              </label>
              <input
                type="text"
                placeholder="digite o nome da disciplina..."
                className="p-2 outline-none"
                onChange={(e) => setDisciplina(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-5 text-white bg-green-600 rounded-md"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default CadastroDisciplinas;
