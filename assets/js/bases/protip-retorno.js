    // function crearPersona( nombre, apellido ){
    //     return{ 
    //         nombre: nombre, 
    //         apellido: apellido, 
    //     }
    // }
    
    
    // function crearPersona( nombre, apellido ){
    //     return{ nombre, apellido, }
    // }

    const crearPersona = ( nombre, apellido ) => ({ nombre, apellido, });

    const persona = crearPersona( 'Lou', 'Curioso' );
    console.log( persona );

    function imprimeArgumentos(){
        console.log( arguments );
    }
    //consideraciones: Después del parámetro rest no puede venir otro argumento. Sí se necesita extraer una variable antes del parámetro rest, ese valor va a tener su propia variable(argumento) independiente. 
    const imprimeArgumentos_dos = (edad, ...args) =>{ //parametro rest. Todos los argumentos enviados a imprimirargumentos_dos cree un arreglo con cada  uno de ellos
        // console.log({edad, args });
        return args;
    }

    // imprimeArgumentos( 10, true, false, 'Salem', 'Hi' );
    const [casado, vivo, nombre, saludo] = imprimeArgumentos_dos( 10, true, false, 'Salem', 'Hi' );
    // console.log({ argumentos });
    console.log({ casado, vivo, nombre, saludo });

    const { apellido: nuevoApellido } = crearPersona( 'Lou', 'Curioso' );
    console.log({nuevoApellido});

    //Destructuración de Argumentos
    /* const imprimePropiedades = ( personaje ) => {
        console.log( 'nombre: ', personaje.nombre );
        console.log( 'codeName: ', personaje.codeName );
        console.log( 'vivo: ', personaje.vivo );
        console.log( 'edad: ', personaje.edad );
        console.log( 'trajes: ', personaje.trajes );
    }; */

    const imprimePropiedades = ({ nombre, codeName, vivo, edad, trajes }) => {
        console.log({nombre}); 
        console.log({codeName}); 
        console.log({vivo}); 
        console.log({edad}); 
        console.log({trajes});
    };

    const Tony = {
        nombre: 'Tony Stark',
        codeName: 'Ironman',
        vivo: false,
        edad: 40,        
        trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    };

    imprimePropiedades( Tony );
