    // Operador Ternario
    // Días de semana abrimos a las 11,
    // pero los fines de semana abrimos a las 9

    // Entra a un sitio web para consultar si está abierto hoy...
    const dia = 1; // 0:Domingo... 1: Lunes...
    const horaActual = 10;

    let horaApertura;
    let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

    // if( dia === 0 || dia === 6 ){
    // if([0, 6].includes( dia )){ //includes, es un método que tienen los arreglos para indicar o para preguntar si algo existe dentro de ese arrgelo. 
    //     console.log('Fin de semana');
    //     horaApertura = 9;
    // } else {
    //     console.log('Día de semana');
    //     horaApertura = 11;
    // }
    // Reducir el código de arriba con operador Ternario.
    horaApertura = ( [0, 6].includes( dia ) ) ? 9 : 11;

    // if( horaActual >= horaApertura ){
    //     mensaje = 'Está abierto';
    // } else {
    //     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`; // hay que cambiar los apostrofes por Back tick. Para hacer interpolaciones (concatenaciones) de strings 
    // }
    //Reducir el código de arriba con operador Ternario.
    mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto': `Está cerrado, hoy abrimos a las ${horaApertura}` ;

    console.log({ horaApertura, mensaje });
