import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 2, 200);

console.log(negociacao.volume);