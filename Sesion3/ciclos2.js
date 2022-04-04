const estudiantes = [
    {
      nombre: "Rosmira",
      carrera: "Matematico",
      semestre: 2,
      sexo: "F",
      materias: [{ nombre: "mate 1", nota: 1 }],
    },
    {
      nombre: "Patricia",
      carrera: "Matematico",
      semestre: 13,
      sexo: "F",
      materias: [{ nombre: "mate 2", nota: 2 }],
    },
    {
      nombre: "Guille",
      carrera: "Derecho",
      semestre: 5,
      sexo: "M",
      materias: [{ nombre: "mate 3", nota: 3 }],
    },
    {
      nombre: "Leon",
      carrera: "Artes",
      semestre: 7,
      sexo: "M",
      materias: [
        { nombre: "mate 4", nota: 4 },
        { nombre: "Sociales y ya", nota: 4 },
      ],
    },
  ];

//Metodo FIND ---> Retorna solo el primer elemento
console.log('Estudiantes: ',estudiantes);
let estudiante = estudiantes.find(c => c.nombre === 'Leon');
console.log('°°°°°°°°°°°°°°°°°°°°°°°°°',estudiante);

//Metodo FILTER ---> Retorna todos los elementos del Array

let EstadoFactura = 7;
const ESTADOS = [1,2,5,8];
let sw = false;

//Metodo INDEXOF ---> Devuelve la posición donde entontró el elemtno en el array, ( "-1" cuando no lo encuentra)
let existeEstado = ESTADOS.indexOf(EstadoFactura);
console.log(existeEstado);

for (const ValorEstado of ESTADOS) {
  if (ValorEstado === EstadoFactura) {
    sw = true;
    break;
  }
}
console.log(sw);

//Metodo FIND INDEX ---> Devuelve tambien la posiciónun True o False
console.log(ESTADOS.findIndex(x => x > 5));