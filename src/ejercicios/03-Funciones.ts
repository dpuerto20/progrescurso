function sumar(a: number, b: number) {
  return a + b;
}

const impulsarflecha = (x: number, y: number): number => {
  return x + y;
};

function multiplicar(
  numero1: number,
  numero2?: number,
  base: number = 20
): number {
  return numero1 * base;
}
const resultado = multiplicar(100, 0, 50);

console.log(resultado);

interface Persona {
  nombre: string;
  dinero: number;
  mostrardonacion: () => void;
  
}

function donar(persona: Persona, donacion: number): void {
  persona.dinero += donacion;
  
}

const nuevousuario: Persona = {
  nombre: "caramelo",
  dinero: 100,
  mostrardonacion(){
      console.log ( `el dinero de ${this.nombre} es : `  ,this.dinero);
  }


}

donar(nuevousuario,900);
nuevousuario.mostrardonacion();