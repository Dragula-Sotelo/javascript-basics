    const dia = 8; //0: Domingo

    switch( dia ){ //dia es la variable de control. El switch hace una evaluación como el triple igual (===), ya que, evalua tanto el valor como que sea el mismo tipo de dato.
        case 0:
            console.log('Domingo');
            break;
        case 1:
            console.log('Lunes');
            break;
        case 2:
            console.log('Martes');
            break;
        case 3:
            console.log('Miércoles');
            break;
        case 4:
            console.log('Jueves');
            break;
        case 5:
            console.log('Viernes');
            break;
        case 6:
            console.log('Sábado');
            break;
        default:
            console.log('No es ningún día');
    }
