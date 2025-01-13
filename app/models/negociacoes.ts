import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    // lista(): Array<Negociacao> {
    //     return [...this.negociacoes]; //Precisamos do spread operator para resolver um problema: sem ele é possível, modificando o retorno de lista(), alterar o array original (ex: lista().pop()).
    //                                   //Usando o spread operator retornamos uma cópia de negociacoes. Alterar essa cópia não altera o array original.
    //                                   //Como alternativa, temos o ReadOnlyArray, apresentado a seguir.
    // }

    lista (): ReadonlyArray<Negociacao> { //Utilizar ReadonlyArray para evitar alterações no array original.
        return this.negociacoes;
    }
}