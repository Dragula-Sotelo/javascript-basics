    const heroes = ['Batman', 'Superman', 'WonderWoman', 'Aquaman'];

    //Ciclo For Tradicional
    console.warn('For tradicional');
    for( let i = 0 ; i < heroes.length ; i++ ){//El ciclo for tiene tres partes. la primer parte es donde se inicializa la variable, la segunda nos sirve como la condición del while, y la tercera es el incrementador. ( let i = 0 ; i <= heroes.length - 1 ; i++ ) esta sintaxis es igual y más segura.
        //Estas llaves son el scop del ciclo for, es decir, es lo que se va a repetir tantas veces como la condición se cumpla. 
        console.log( heroes[i] );
    }

    console.warn('For in');
    for( let i in heroes ){//Después del in viene el iterable, el arreglo o el objeto que nos permita barrer
        console.log( heroes[i] );
    }

    console.warn('For of');
    //Es muy usado para obtener referencias a valores de objetos o arreglos de una manera más sencilla.
    for( let heroe of heroes ){//No se acostumbra a colocar el i, sino el modo singular del arreglo 
        console.log( heroe );
    }
