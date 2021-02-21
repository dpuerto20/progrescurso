let materias: [];

interface Materia {
  nombre: string;
  profesor: {
    nombre: string;
    edad: number;
    estado?: boolean;
  };

  intensidad: number;
  horario: string[];
}

const english: Materia = {
  nombre: "english",
  horario: ["lunes", "martes", "miercoles"],
  intensidad: 10,
  profesor: {
    nombre: "juan de Dios ",
    edad: 56,
    estado: true,
  },
};

console.log(
  `la materia ${english.nombre} la dicta el profesor ${english.profesor.nombre} y esta dura solo  ${english.horario.length} dias  ${english.horario} con una intensidad de ${english.intensidad} horas  `
);

let perro 
 
perro = a;
