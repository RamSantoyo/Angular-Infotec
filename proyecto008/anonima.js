//funcion anonima con 3 parametros y uno opcional en typescript
var funcion = function (a, b, c) {
    //ternario
    return c ? a + b + c : a + b;
};
console.log(funcion(1, 2, 3));
