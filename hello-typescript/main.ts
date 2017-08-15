var myVar = 'minha variável';

let num = 2;

var numeros = [1, 2, 3]

numeros.map(function(valor){
    return valor*2;
})

numeros.map(valor => valor*2)


class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}