export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): Array<Negociacao> {
    //     return [...this.negociacoes]; //Precisamos do spread operator para resolver um problema: sem ele é possível, modificando o retorno de lista(), alterar o array original (ex: lista().pop()).
    //                                   //Usando o spread operator retornamos uma cópia de negociacoes. Alterar essa cópia não altera o array original.
    //                                   //Como alternativa, temos o ReadOnlyArray, apresentado a seguir.
    // }
    lista() {
        return this.negociacoes;
    }
}
