
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

    class Heroe extends Persona {
        
        clan = 'Sin Clan';
        constructor(nombre, codigo, frase){
            super(nombre, codigo, frase);
            this.clan = 'Los Avengers'
        }

        quienSoy(){
            console.log(`Soy ${ this.nombre }, ${ this.clan }`);
            super.quienSoy();
        }
    }

    const spiderman = new Heroe( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
    // const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );
    // const spiderman = new Heroe();
    console.log(spiderman);
    spiderman.quienSoy();
