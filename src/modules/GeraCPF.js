import ValidaCPF from "./validaCPF.js";

export default class GeraCPF {
  //criando uma classe para gerar um CPF
  rand(min = 100000000, max = 999999999) {
    //metodo para gerar numeros aleatorios, gera 9 digitos aleatorios, a partir desses 9 digitos gera o primeiro e o segundo digito do cpf podemos ter valores de cpf entre o min e o max

    return Math.floor(Math.random() * (max - min) + min);
  }

  formatado(cpf) {
    return (
      cpf.slice(0, 3) +
      "." +
      cpf.slice(0, 6) +
      "." +
      cpf.slice(0, 9) +
      "-" +
      cpf.slice(0, 11)
    );
  }
  geraNovoCPF() {
    const cpfSemDigito = this.rand();
    const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
    const novoCpf = cpfSemDigito + digito1 + digito2;
    return this.formatado(novoCpf);
  }
}
