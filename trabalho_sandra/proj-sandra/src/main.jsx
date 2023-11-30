import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CadastroProfessores from "./pages/CadastroProfessor.jsx";
import CadastroTurmas from "./pages/CadastroTurmas.jsx";
import CadastroDisciplinas from "./pages/CadastroDisciplinas.jsx";
import CadastroHorarios from "./pages/CadastroHorarios.jsx";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/professores",
    element: <CadastroProfessores />,
  },
  {
    path: "/turmas",
    element: <CadastroTurmas />,
  },
  {
    path: "/disciplinas",
    element: <CadastroDisciplinas />,
  },
  {
    path: "/horarios",
    element: <CadastroHorarios />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </React.StrictMode>
);
