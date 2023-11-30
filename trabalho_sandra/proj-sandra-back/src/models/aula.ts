class Aula {
  professorId: string;
  disciplinaId: string;
  turmaId: string;
  quantidadeDias: number;
  dataInicio: Date;
  dataFim: Date;

  constructor(
    professorId: string,
    disciplinaId: string,
    turmaId: string,
    quantidadeDias: number,
    dataInicio: Date,
    dataFim: Date
  ) {
    this.professorId = professorId;
    this.disciplinaId = disciplinaId;
    this.turmaId = turmaId;
    this.quantidadeDias = quantidadeDias;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
  }
}

export default Aula;
