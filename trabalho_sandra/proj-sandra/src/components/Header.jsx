const Header = () => {
  return (
    <header className="flex justify-between w-full px-10 py-5 text-white bg-cyan-950">
      <a href="/">
        <h1>Trabalho Sandra</h1>
      </a>
      <nav>
        <ul className="flex items-center gap-3">
          <li>
            <a href="/professores" className="hover:text-blue-400">
              Cadastro de Professores
            </a>
          </li>
          <li>
            <a href="/turmas" className="hover:text-blue-400">
              Cadastro de Turmas
            </a>
          </li>
          {/* <li>
            <a href="/horarios" className="hover:text-blue-600">
              Cadasto de Horários
            </a>
          </li> */}
          <li>
            <a href="/disciplinas" className="hover:text-blue-400">
              Cadasto de Disciplinas
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
