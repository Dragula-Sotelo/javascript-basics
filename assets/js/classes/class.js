    //Las propiedades y métodos estaticos nos permiten poder utilizarlos sin necesidad de instanciar está clase. 
    class Persona {

        static _conteo = 0;
        static get conteo(){
            return Persona._conteo + ' intancias';
        }

        static mensaje() {
            console.log('Hola a todos, soy un método estático');
        }

        nombre = '';
        codigo = '';
        frase = '';
        comida = ''

        constructor( nombre = 'Sin nombre', codigo = 'Sin código',  frase = 'Sin frase' ) {
            // if( !nombre ) throw Error('Necesitamos el nombre');

            this.nombre = nombre;
            this.codigo = codigo;
            this.frase = frase;

            Persona._conteo++;
        }

        set setComidaFavorita( comida ) { // El set es para establecer un valor.
            this.comida = comida.toUpperCase();
        }

        get getComidaFavorita(){ // El get es para recuperar  un valor
            return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
        }

        quienSoy(){
            console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
        }
        miFrase(){
            this.quienSoy();
            console.log(`${ this.codigo }, dice: ${ this.frase }`);
        }
    }// Antes de crear la instancia, nos da la oportunidad de ejecutar el código. El constructor es el único método que retorna una isntancia de un objeto y no retorna undefined.


    const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
    const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );

    // console.log(ironman);
    // spiderman.quienSoy();
    // ironman.quienSoy();
    // spiderman.miFrase();
    // ironman.miFrase();
    
    // spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
    // spiderman.nemesis = 'Duende Verde'; // Esto esta mal.
    // console.log(spiderman);
    // console.log(spiderman.getComidaFavorita);
    // Persona._conteo = 2;
    console.log('Conteo stático', Persona._conteo );
    console.log(Persona.conteo);
    Persona.mensaje();

    Persona.propiedadExterna = '¡Hola baby!'
    console.log(Persona.propiedadExterna);
    console.log(Persona);
