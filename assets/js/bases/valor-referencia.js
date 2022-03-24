

    let a = 10;
    let b = a;
    a = 30;

    console.log({a, b});

    let Salem = { nombre: 'Salem' }; //En JavaScript: Todos los objetos son pasados por referencia. Todos los primitivos son pasados por Valor. 
    let Nala = { ...Salem }; //Cuando se ocupa en cualquier otro lugar(..) Es el operador Spread y simboliza, separa los elementos. La ventaja es que rompe la referencia que hay en JS. y de esa manera, trabajar objetos y hacer igualaciones que apunten a diferentes espacios de memoria. 
    Nala.nombre = 'Nala';

    console.log({ Salem, Nala });

    const cambiaNombre = ({ ...persona }) => {  //(...) Parámetro Rest, une todos los argumentos en una sola variable y transformalo como un arreglo. 
        persona.nombre = 'Tony';
        return persona;
    }

    let peter = { nombre: 'Peter' };
    let tony = cambiaNombre( peter );

    console.log({ peter, tony });

    // Arreglos
    const frutas = ['Manzana', 'Pera', 'Piña'];

    console.time('slice');
    // const otrasFrutas = frutas;
    const otrasFrutas = frutas.slice(); //Esto regresa un nuevo arreglo, rompiendo dicha relación. 
    console.timeEnd('slice');
    
    console.time('spread');
    const otrasFrutas2 = [...frutas]; // Sí es un arreglo colocarlo entre llaves cuadradas, y utilizar el operador esprit para separar cada uno de los elementos que vienen en el arreglo y retornarlo de una manera independiente. 
    console.timeEnd('spread');

    otrasFrutas.push('Mango');

    console.table({ frutas, otrasFrutas });
