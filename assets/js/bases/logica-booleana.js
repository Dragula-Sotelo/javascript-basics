    const regresaTrue = () => {
        console.log('Regresa True');
        return true;
    }

    const regresaFalse = () => {
        console.log('Regresa False');
        return false;
    }

    console.warn('Not o la negación');
    console.log(true); // true
    console.log(!true); // false ! Negación (Not)
    console.log(!false); // true ! Negación (Not)

    console.log(!regresaFalse()); //true ! Negación (Not)

    console.warn('And'); // true si todos los valores son verdaderos.
    console.log(true && true); //true ambos son verdaderos. 
    console.log(true && false); //false 
    console.log(true && !false); //true
    
    // Otro uso común que tiene el And (&) es disparar acciones únicamente si la primer acción se cumple. 
    console.warn('Acciones sí se cumple la primera acción');
    console.log(regresaFalse() && regresaTrue()); //false
    console.log(regresaTrue() && regresaFalse()); //false

    console.warn('&&');
    regresaFalse() && regresaTrue();
    console.log('Cuatro condiciones', true && true && true && false); // false

    console.warn('OR'); // true, por lo menos una condición es true y lo demás no importa. 
    console.log(true || false); // true
    console.log(false || false); // false

    console.log(regresaTrue() || regresaFalse());
    console.log('Cuatro condiciones', true || true || true || false); // true

    console.warn('Asignaciones');

    const soyUndefined = undefined;
    const soyNull = null;
    const soyFalso = false;

    const a_uno = false && 'Hola Mundo' && 150; // 
    const a_dos = 'Hola' && 'Mundo' && soyFalso; // 
    const a_tres = soyFalso || 'Ya no soy Falso'; // 
    const a_cuatro = soyFalso || soyNull || soyUndefined || 'Ya no soy Falso de nuevo' || true; // 
    const a_cinco = soyFalso || soyUndefined || regresaTrue()  || 'Ya no soy Falso de nuevo' || true; // 

    console.log({a_uno, a_dos, a_tres, a_cuatro, a_cinco, });


