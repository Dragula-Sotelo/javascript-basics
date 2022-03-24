
    function saludar( nombre ){ //identificador de los argumentos
        // console.log(arguments);
        // console.log('Hola ' + nombre);
        return [1, 2, 3, 4, 5];
        //Esto nunca se va a ejecutar
        console.log('Soy un código que está después del return');
    }

    const saludar_dos =  function(nombre){ //función ánonima
        console.log('Hola ' + nombre);
    }

    //lambda functions o arrowFunction o funciones flecha
    const saludarFlecha = () => {
        console.log('Hola Flecha');
    }

    const saludarFlecha_dos = ( nombre ) => {
        console.log('Hola ' + nombre);
    }

    const retornoDeSaludar = saludar('Nala', 40, true, 'Costa Rica'); // 1
    // console.log( retornoDeSaludar[0], retornoDeSaludar[1] );
    // saludar_dos('Cocodrilo');
    // saludarFlecha();
    // saludarFlecha_dos('Curca');

    function sumar(a, b){
        return a + b;
    }

    // const sumar_dos = (a, b) => {
    //     return a + b;
    // } 
    // console.log( sumar(1, 2) );
    
    const sumar_dos = (a, b) => a + b;
    // console.log( sumar_dos(2, 2) );
    
    function getAleatorio(){
        return Math.random();
    }
    console.log( getAleatorio() );

    //En una función de flecha que no tenga llaves { }
    const getAleatorio_dos = () => Math.random();
    console.log( getAleatorio_dos() );


