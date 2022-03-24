
    const lou = {
        nombre:'Lou',
        edad: 30,
        imprimir(){
            console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad } `);
        }
    }

    const duquesa = {
        nombre:'Duquesa',
        edad: 35,
    }
    
    // lou.imprimir();
    // duquesa.imprimir();
    //Ok, esto se debe crear con la palabra new
    function Persona(nombre, edad) {//es una función con una letra mayúscula, es uppercamelcase, es decir, es una función que me va servir para crear instancias. 
        console.log('Se ejecuto está línea');
        
        this.nombre = nombre;
        this.edad = edad;

        this.imprimir = function(){
            console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad } `);
        }
    }

    const  maria = new Persona('María', 18);
    const  salem = new Persona('Salem', 20);
    console.log(maria);
    maria.imprimir();
    salem.imprimir();
