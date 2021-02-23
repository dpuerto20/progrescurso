



interface Teclado {
    marca: string;
    modelo: string;
    precio: number;
    esMecanico: true;
    esInalambrico: false;
  }
  
  interface Mouse {
    marca: string;
    modelo: string;
    precio: number;
    dpi: number;
    color: string;
  }
  
  interface Monitor {
    marca: string;
    modelo: string;
    precio: number;
    tipo: string;
    tamano: string;
  }
  interface Componentes {
    ram: string;
    ssd: string;
  }
  
  
  
  interface Computador {
    teclado: Teclado;
    mouse: Mouse;
    monitor: Monitor;
    ram:string,
    ssd:string,
  }
  
  const pc: Computador = {
    monitor: {
      precio: 109.0,
      marca: "Asus",
      tipo: "LCD",
      modelo: "VP229Q",
      tamano: "21.5",
  },
  
  teclado: {
      marca: 'Logitech',
      modelo:' k840',
      precio: 79.99, 
      esMecanico:true,
      esInalambrico:false,
   },
  
  mouse :{
      marca:'razer',
      modelo:'DEathhadder',
      precio: 29.99,
      dpi:6400,
      color:'negro',
  },
  ram: "16",
  ssd:"1tb",
  
  }
  const computador: Computador = {
    teclado: {
      marca: "Logitech",
      modelo: "K840",
      precio: 79.99,
      esMecanico: true,
      esInalambrico: false,
    },
    mouse: {
      marca: "Razer",
      modelo: "DeathAdder",
      precio: 29.99,
      dpi: 6400,
      color: "negro",
    },
    monitor: {
      marca: "Asus",
      modelo: "VP229Q",
      precio: 109.0,
      tipo: "LCD",
      tamano: '21.5"',
    },
    ram: "16",
    ssd: "1TB",
  };
  


console.table(computador,);
console.table(pc);







