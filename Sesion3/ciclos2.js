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

//Metodo find
console.log('Estudiantes: ',estudiantes);
let estudiante = estudiantes.find(c => c.nombre === 'Leon');
console.log('°°°°°°°°°°°°°°°°°°°°°°°°°',estudiante);

