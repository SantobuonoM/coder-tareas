class Persona {

    constructor(nombre,apellido, mascota, libro){
        this.nombre=nombre;
        this.apellido=apellido;
        this.mascota=[mascota]
        this.libro=[libro];

    };

    getFullName(){

        return `${this.nombre} ${this.apellido}`


    }
    
    addMascota(mascota){

        this.mascota.push(mascota)
      
        
    }

    countMascota(){

        return this.mascota.length

    }


    addBook(libro){

        return this.libro.push(libro)
    }


    getBookNames(){
        return this.libro.map(libro => ( libro.Nombre) 
        )
    }





}
    
    
    
    
const libro = {Nombre:'El Principito', Autor:'Antoine de Saint-Exupéry'}   
    
const usuario = new Persona('Diego','Sosa','gato',libro);

console.log(usuario.getFullName());

console.log(usuario.mascota);

console.log(usuario.countMascota());

console.log(usuario.libro);

console.log(usuario.getBookNames())

usuario.addMascota('perro');


console.log(usuario.getFullName());

console.log(usuario.mascota);

console.log(usuario.countMascota());

console.log(usuario.libro);

console.log(usuario.getBookNames())
