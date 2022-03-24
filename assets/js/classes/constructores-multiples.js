    // Sobrecarga de constructores. 
    class Persona {

        static porObjeto({ nombre, apellido, pais }){// destructuración de argumentos.
            return new Persona( nombre, apellido, pais );
        }

        constructor(nombre, apellido, pais){
            this.nombre = nombre;
            this.apellido = apellido;
            this.pais = pais;
        }

        getInfo(){
            console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
        }
    }

    const nombre_1 = 'Duquesa',
          apellido_1 = 'Aristogato',
          pais_1 = 'Francia';

    const salem = {
        nombre: 'Salem',
        apellido: 'Curioso',
        pais: 'México'
    }

    const persona_1 = new Persona( nombre_1, apellido_1, pais_1 );
    const persona_2 = Persona.porObjeto( salem );

    persona_1.getInfo();
    persona_2.getInfo();
