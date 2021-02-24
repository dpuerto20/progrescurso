import { calcularImpuestoSobreVentas, Instrumentos, bateria } from "./06-desestructuracion.funcion";

const carritocompras :Instrumentos[ ] = [

{
calidad: 'instrumento1',
 precios : 200,
 cantidad: 252,
descuneto:true,
}
{
calidad: 'instrumento1',
 precios : 200,
 cantidad:524,
 descuneto:true,
}

];
console.log(bateria);


const [ total,isv ] =calcularImpuestoSobreVentas(carritocompras)

console.log('total',total)
console.log('impuestossobreventas',isv)

