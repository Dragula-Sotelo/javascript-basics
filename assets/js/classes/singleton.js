    // Singeton es una instancia única de mi clase. 
    class Singleton { 

        static #instancia; // undefined
        nombre = '';

        constructor(nombre = '') {
            // const a = undefined;
            // console.log(a);
            // console.log(!a);
            // console.log(!!a);
            //if?
            if( !!Singleton.#instancia ){
                return Singleton.#instancia;
            }
            Singleton.#instancia = this;
            this.nombre = nombre;

            // return this;
        }
    }

    const instancia_1 = new Singleton('Ironman');
    const instancia_2 = new Singleton('Spiderman');
    const instancia_3 = new Singleton('Black Panther');

    console.log(`Nombre en la instancia_1 es; ${ instancia_1.nombre } `);
    console.log(`Nombre en la instancia_2 es; ${ instancia_2.nombre } `);
    console.log(`Nombre en la instancia_3 es; ${ instancia_3.nombre } `);
