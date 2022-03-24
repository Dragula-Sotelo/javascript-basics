    //¿Qué son los ciclos?
    //Sirve para repetir el mismo código varias veces. 

    const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
    //La condición debe asegurarse de que se cumpla; sino, vas a tener un ciclo infinito. 

    let i = 0;
    // while( i < carros.length ){
    //     console.log(carros[i]); // Sí se queda de esta manera seguiriamos en el ciclo infinito. Ya que no estoy incrementando i en ningún lugar.
        // i = i + 1; //Para incrementar i.
    //     i++;
    // }
    console.warn('While');
    // Hay otras cosas que son considerados condiciones falsas que harían que el ciclo nunca se ejecute. 
    //undefined
    //null
    //false

    while( carros[i] ){
        if( i === 1){
            // break;
            i++;
            continue;
        }
        console.log(carros[i]);
        i++;
    }

    console.warn('Do While');
    //La única diferencia es que el ciclo Do While se va ejecutar al menos una vez.
    let j = 0;

    do{
        console.log( carros[j] );
        j++;
    }while( carros[j] );
