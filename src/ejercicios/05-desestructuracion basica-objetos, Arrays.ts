interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  letras: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
  copyright: boolean;
}

const reproductor: Reproductor = {
  volumen: 60,
  segundo: 0.15,
  cancion: "Losing my Religion",
  letras: "letras.com",
  detalles: {
    autor: "Michael stipe",
    anio: 1991,
    copyright: true,
  },
};

console.log({ opciones: { ...reproductor.detalles, ...reproductor } });

const { volumen: volumenMax, segundo, letras, cancion } = reproductor;
volumenMax;

const { anio, copyright, autor } = reproductor.detalles;

// console.log(`el volumen actual es de: `, volumenMax);
// console.log(`Nombre de la cancion: `, cancion);
// console.log(`letras de la cancion: `, letras);
// console.log(`el segundo actual es de: `, segundo);
// console.log(`el Autor es: `, autor);
// console.log(`el año es: `, anio);
// console.log(`tiene copyright?: `, copyright);


const superMario: string[] = [ 'mario','luigui','princesa' ];
const [ primerlugar,segundolugar,tercerlugar] =superMario ;
console.log( 'persoaje numero 1',primerlugar);
console.log( 'persoaje numero 2',segundolugar);
console.log( 'persoaje numero 3',tercerlugar);

