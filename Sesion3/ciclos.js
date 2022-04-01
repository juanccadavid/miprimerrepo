//ARREGLOS : Todo un conjunto de datos (string, objetos, etc) en una sola variable 
let nombres = ["Juan", "Pedro", "Maria"];
let materia = new Array("Sociales", "Etica", "Religion");
let ciudades = "Medellin, Bogota".split(", ");

const estudiantes = [
    { nombre: "Rosmira", carrera: "Matematico", semestre: 2, sexo: "F" },
    { nombre: "Patricia", carrera: "Matematico", semestre: 13, sexo: "F" },
    { nombre: "Guille", carrera: "Derecho", semestre: 5, sexo: "M" },
    { nombre: "Leon", carrera: "Artes", semestre: 7, sexo: "M" },
];

// console.log(estudiantes)console.log(estudiantes)

try{
    ciudades.forEach((ciudades) => {
        console.log(ciudades);
        if(ciudades === 'Medellin') {
            throw "Parameter isn't a number";
        }
    });
}
catch (e) {
    console.log(e);
}

estudiantes.forEach((estudiantes) => {
    console.log(estudiantes.nombres)
})

for (const estudiante of estudiantes) {
    console.log(estudiante.nombre);
}
estudiantes.map(c => {
    console.log(c.semestre);}
);
estudiantes.map(c => console.log(c.semestre));

let aprobo = new Array()
//FOR NORMAL
for (let i = 0; i <estudiantes.length; i++){

    if (estudiantes[i].semestre >= 5){
        aprobo.push(estudiantes[i].nombre);
    }
}
console.log('Aprobaron for: ',aprobo)

//FOR OF
for (const estudiante of estudiantes) {
    if(estudiante.semestre.semestre >= 5){
        aprobo.push(estudiantes.nombre); 
    }
}
console.log('Aprobaron forof: ',aprobo)

//MAP ---> retorna UNDEFINED
let respuesta = estudiantes.map( c=> {
    if(c.semestre>=5){
        return(c.nombre);
    }
})
console.log('Aprobaron map: ',respuesta)

// 1. filter
// 2. map

//FILTER RETORNA TODO
// const respuestacorrecta = estudiantes.filter((c) => {
//     if(c.semestre >= 5 && c.materias.filter((m) => m.nota > 2).map( i =i.nota).length > 0) {
//         return c;
//       //nombre: c.nombre,
//       //ma  eria: c.materias.map((k) => k.nombre).join(", "),
//     }
// });
//console.log('Aprobaron filtrer: ',respuestacorrecta);

// in, of , normalito
// for
// while
// do while

let n = 0;
while (n < 3) {
  console.log('Resultado while: ',n);
  n++;
}
let i = 0, resultado = 0;
do {
  i++;
  resultado += i;
  console.log('i: ',i,'resultado: ',resultado)
} while (i < 5);

//console.log('Resultado do while: ',resultado);

/*Para
comentar
varias 
lineas */
