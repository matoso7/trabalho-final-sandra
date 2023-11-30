import axios from "axios";
import { useState } from "react";
import Header from "../components/Header";
import { API_URL } from "../constants";
import { toast } from "react-toastify";

const CadastroHorarios = () => {
  const [inicoAula, setInicioAula] = useState("");
  const [terminoAula, setTerminoAula] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();

    await axios.post(`${API_URL}/horarios`, {
      inicoAula,
      terminoAula,
    });

    toast.success("Horários criados com sucesso!");
  };

  return (
    <>
      <Header />
      <main className="">
        <div className="absolute transform -translate-x-1/2 max-w-md w-full -translate-y-1/2 rounded-lg bg-zinc-600 top-1/2 left-1/2">
          <form onSubmit={handleChange} className="flex flex-col p-10 ">
            <h1 className="text-2xl text-white">Cadastro de Horário</h1>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="" className="text-white">
                Inicio da aula
              </label>
              <input
                type="time"
                placeholder="digite o inicio da aula..."
                className="p-2 outline-none"
                onChange={(e) => {
                  console.log(e.target.value);
                  setInicioAula(e.target.value);
                }}
                required
              />
              <label htmlFor="" className="text-white">
                Termino da aula
              </label>
              <input
                type="time"
                placeholder="digite o termino da aula..."
                className="p-2 outline-none"
                onChange={(e) => {
                  console.log(e.target.value);
                  setTerminoAula(e.target.value);
                }}
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

export default CadastroHorarios;
