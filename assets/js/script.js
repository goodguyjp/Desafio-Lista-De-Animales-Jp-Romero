class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    datosPropietario() {
        return `<li>El nombre del dueno es: ${this._nombre}. El domicilio es: ${this._direccion}, y el numero telefonico de contacto: ${this._telefono}</li>`
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota() {
        return this._nombreMascota
    }
    set nombreMascota(nombreMascotaNuevo) {
        this._nombreMascota = nombreMascotaNuevo;
    }
    get enfermedad() {
        return this._enfermedad
    }
    set enfermedad(enfermedadNuevo) {
        this._enfermedad = enfermedadNuevo;
    }
}

let botonAgregar = document.querySelector('form')

/* let datosLista = (mascota) => {
    return `${mascota.datosPropietario()}<li>${mascota.tipo}, mientras que el nombre de la mascota es: ${mascota._nombreMascota} y la enfermedad es: ${mascota._enfermedad}</li>`
} */

botonAgregar.addEventListener('submit', (event) => {

    event.preventDefault()

    let nombre = document.querySelector('#propietario').value;
    let telefono = document.querySelector('#telefono').value;
    let direccion = document.querySelector('#direccion').value;
    let nombreMascota = document.querySelector('#nombreMascota').value;
    let tipo = document.querySelector('#tipo').value
    let enfermedad = document.querySelector('#enfermedad').value;
    let datosAgregados = document.querySelector('#resultado');

    //instacia dependiendo de la opcion (perro - gato - conejo) escogida por el usuario
    if (tipo == 'perro') {
        let perro = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
        datosAgregados.innerHTML = `${perro.datosPropietario()}<li>${perro.tipo}, mientras que el nombre de la mascota es: ${perro._nombreMascota} y la enfermedad es: ${perro._enfermedad}</li>`
    }
    else if (tipo == 'gato') {
        let gato = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
        datosAgregados.innerHTML = `${gato.datosPropietario()}<li>${gato.tipo}, mientras que el nombre de la mascota es: ${gato._nombreMascota} y la enfermedad es: ${gato._enfermedad}</li>`
    }
    else {
        let conejo = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
        datosAgregados.innerHTML = `${conejo.datosPropietario()}<li>${conejo.tipo}, mientras que el nombre de la mascota es: ${conejo._nombreMascota} y la enfermedad es: ${conejo._enfermedad}</li>`
    }


    
});