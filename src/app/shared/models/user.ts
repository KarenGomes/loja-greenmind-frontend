export interface User {
  id: number,
  endereco: string,
  contato: string,
  nome: string,
  email: string,
  metodoPagamento: MetodoPagamento[]
}

export interface MetodoPagamento{
  bandeira: string,
  nroCartao: string
}
