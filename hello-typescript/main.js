var myVar = 'minha variável';
var num = 2;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
var Shape = (function () {
    function Shape(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    Shape.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return Shape;
}());
