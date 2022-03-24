let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length );

    let primero = juegos[ 2 - 2 ];
    let ultimo  = juegos[ juegos.length - 1 ];

    console.log({ primero, ultimo });

    juegos.forEach( (elemento, indice, arr) => {
        console.log({ elemento, indice, arr });
    });

    let nuevaLongitud = juegos.push( 'F-Zero' ); // Para agregar un nuevo elemento en el array, última posición
    console.log({ nuevaLongitud, juegos });

    nuevaLongitud = juegos.unshift( 'Fire Emblem' ); //Agrega un nuevo elemento en el array, al inicio.
    console.log({ nuevaLongitud, juegos });

    let juegoBorrado = juegos.pop(); // Remueve el ultimo elemento del arreglo y lo regresa.    
    console.log({ juegoBorrado, juegos });

    let pos = 1;

    console.log( juegos );
    let juegosBorrados = juegos.splice( pos, 2 );
    console.log({ juegosBorrados, juegos });

    let metroidIndex = juegos.indexOf('Metroid'); // CaseSensitive
    console.log({ metroidIndex });

//TODO: Referencia








