interface Vecino {

  nombre : string,
  edad: number,
  direccion:Direccion
  mostrarDireccion:() => string;
}
interface Direccion {
  calle:string,
  ciudad:string,
  pais:string,
}
const vecino : Vecino = {
  nombre: "Jefersson",
  edad: 25,
  direccion: {
    calle: "calle4 #4-39",
    ciudad: "yopal",
    pais: "Colombia",
  },
  mostrarDireccion() {
    return (
      this.nombre +
      `,  ` +
      this.direccion.ciudad +
      ", " +
      this.direccion.pais +
      ", " +
      this.direccion.calle
    );
  },
};

const direccion = vecino.mostrarDireccion();
console.log(direccion);
