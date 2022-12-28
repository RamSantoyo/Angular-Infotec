//funcion anonima con 3 parametros y uno opcional en typescript

let funcion = function (a:number, b:number, c?:number){
    
    //ternario
    return c ? a + b + c : a + b;
}

console.log(funcion(1,2,3));