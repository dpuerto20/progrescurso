export interface Instrumentos {
  precios: number;
  calidad: number | string;
  cantidad: number;
  descuneto: boolean;
}

const violin: Instrumentos = {
  precios: 500,
  calidad: "cedro",
  cantidad: 2,
  descuneto: true,
};
const piano: Instrumentos = {
  precios: 800,
  calidad: "pino",
  cantidad: 1,
  descuneto: false,
};
export const bateria: Instrumentos = {
  precios: 118000,
  calidad: "cedro",
  cantidad: 6,
  descuneto: true,
};

export function calcularImpuestoSobreVentas(productos: Instrumentos[]) {
  let total = 0;
  productos.forEach(({ precios }) => {
    total += precios;
  });
  return [total, total * 0.15];
}
const ins = [violin, piano, bateria];
const [total, isv] = calcularImpuestoSobreVentas(ins);

console.log("impuestossobreventas:", isv);
console.log("total:", total);
