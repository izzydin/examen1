function crearAnimal(especie){
    var animal = {
        evolucion : 'sin evolucion',
        tipo: especie,
        evolucionar: function(){
            var evoluciono = Number.parseInt((Math.random())*5);
            switch (evoluciono) {
                case 1: evolucion = 'mamifero'; break;
                case 2: evolucion = 'marsupial'; break;
                case 3: evolucion = 'ave'; break;
                case 4: evolucion = 'pez'; break;
                case 5: evolucion = 'reptil'; break;
                default: evolucion = 'superman'; break;
            }
            return this.tipo + ' evoluciono en un ' +  evolucion;
        },
        seAlimenta : function(){
            var alimento = 'lo que sea';
            switch (evolucion) {
                case 'mamifero': alimento = 'omnivoro'; break;
                case 'marsupial': alimento = 'insectivoro'; break;
                case 'ave': alimento = 'come desperdicios'; break;
                case 'pez': alimento = 'come plankton'; break;
                case 'reptil': alimento = 'carnivoro'; break;
                default: alimento = 'come hambruguesas'; break;
            }
            return this.tipo + ' es un ' + alimento;
        }
    }
    return animal;
}

var koala = crearAnimal('koala');
console.log(koala.evolucionar());
console.log(koala.seAlimenta());
