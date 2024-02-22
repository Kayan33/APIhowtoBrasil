export class ListaMoradiaDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly endereco: string,
        readonly linkCorrelatos: string,
        readonly area: string,
        readonly quartos: number,
        readonly valor: string,
        readonly banheiro: number,
        readonly vagas: number,
        readonly foto: string,
    
        ){}
  }