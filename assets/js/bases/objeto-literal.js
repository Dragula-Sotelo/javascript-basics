
    const personaje = {
        nombre: 'Tony Stark',
        codeName: 'Ironman',
        vivo: false,
        edad: 40,
        coords: {
            lat: 34.034,
            lng: -118.70
        },
        trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
        dirección: {
            zip: '10880, 90265',
            ubicación: 'Malibu, California'
        },
        'ultima-pelicula': 'Infinity War'
        // con let se puede generar un arreglo Object.entries, pero para que no se pueda mutar el objeto cambiar por const
    };

    console.log( personaje );
    console.log('Nombre:', personaje.nombre);
    console.log('Nombre:', personaje['nombre']);
    console.log('Edad:', personaje['edad']);

    console.log('Coords:', personaje.coords);
    console.log('Lat:', personaje.coords.lat);
    console.log('Lng:', personaje.coords.lat);

    console.log('No. Trajes:', personaje.trajes.length);
    console.log('Último Traje:', personaje.trajes[ personaje.trajes.length - 1 ]); // De forma Dinámica 
    console.log('Último Traje:', personaje.trajes[ 2 ]); //No se debe quedar en duro o fijo

    const x = 'vivo';
    console.log('Vivo:', personaje[x] );

    console.log('Última Película:', personaje['ultima-pelicula'] );

    //Más detalles
    personaje.edad = null;
    console.log( personaje );

    delete personaje.edad;
    console.log( personaje );

    //Trabajar el objeto como si fuera un arreglo
    personaje.casado = true;

    const entriesPares = Object.entries( personaje );
    console.log( entriesPares );

    // personaje = true;
    console.log( personaje );

    //Para hacer un bloqueo de las propiedades o las modificaciones 
    //Object.freeze lo congela como estaba en el momento en que se hizo la instrucción
    Object.freeze( personaje );
    personaje.dinero = 1000000;
    personaje.casado = false;
    personaje.dirección.ubicación = 'Costa Rica';
    console.log( personaje );

    //métodos que puedes ser utiles
    //listado de todas las propiedades que tiene ese objeto
    const propiedades = Object.getOwnPropertyNames( personaje );
    const valores = Object.values( personaje );
    console.log({ propiedades, valores });

