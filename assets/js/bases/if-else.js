    //Estructuras de Control.
    let a = 5;

    if ( a >= 10 ){ //If con paréntesis, simboliza una función. Espera un valor Booleano. Hay excepciones, undefined, null, una asignación.
        console.log('A es mayor o igual a 10');
    } else {
        console.log('A es menor a 10');
    }

    // if ( a < 10 ){
    //     console.log('A es menor a 10');
    // }
    // console.log('Fin de programa');

    const hoy = new Date(); // {} Date, obtiene la información del momento actual.
    let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes...
    // console.log(hoy);

    console.log({ dia });

    if( dia === 0 ){
        console.log('Domingo');
    } else if( dia === 1 ) {
        console.log('Lunes');
        // if( dia === 1 ){
        //     console.log('Lunes');
        // }else{
        //     console.log('No es Lunes ni Domingo');
        // }
    } else if( dia === 2 ){
        console.log('Martes');
    } else {
        console.log('No es Lunes, Martes o Domingo...');
    }

    //Sin usar If Else o Switch, únicamente objetos.
    dia = 6; //0: Domingo...
    // Se puede resolver con objetos y con Arreglos.

    const diasLetras = {
        0: 'Domingo',
        1: 'Lunes',
        2: 'Martes',
        3: 'Miércoles',
        4: 'Jueves',
        5: 'Viernes',
        6: 'Sábado',
    }
 
    const diasLetras_dos = [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ]

    // Día de la semana
    console.log( diasLetras[dia] || 'Día no definido');
    console.log( diasLetras_dos[dia] || 'Día no definido');
