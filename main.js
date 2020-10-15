

const ages = [20, 25, 80, 15, 40, 16, 21];

// Forma tradicional
// for(let i = 0; i < ages.length; i++) {
//     console.log('El año de nacimiento es', 2020 - ages[i]);
// }

// MAP
console.log(ages);

ages.map( (elem, index, arr) => {
    console.log('El año de nacimiento es', 2020 - elem);
} );

const proximaEdad = ages.map( (elem, index, arr) => {
    return elem + 1;
} );

console.log('Original', ages);
console.log('Modificado', proximaEdad);


// FILTER
const allowedAges = ages.filter(  (elem, index, array) => {
    return elem >= 18;
}  );

console.log('Pueden entrar los que tienen edad:', allowedAges);


// REDUCE
const totalAge = ages.reduce(  (total, elem, index, arr) => {
    return total + elem;
}   );

console.log('La edad total es:', totalAge);


function saludaPersona(nombre, edad) {
    return `Hola ${nombre}, tienes ${edad} años`;
}


sumaEdades('Pepe', 40);