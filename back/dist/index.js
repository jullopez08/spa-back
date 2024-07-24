"use strict";
console.log("hola");
const nombre = 'Julieth';
const saludar = (name) => {
    return `Hola ${name}!`;
};
console.log(saludar(nombre));
const calcular = (cantidad, precio) => {
    return cantidad * precio;
};
console.log(calcular(20, 8));
const usuario = {
    name: 'Julieth Lopez',
    age: 23,
    email: 'jperdomo@iegabo.edu.co',
    active: true,
    address: {
        street: 'calle cualquiera',
        city: 'pais'
    }
};
console.log(usuario);
