import readline from "node:readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para procesar el nombre
function procesarNombre(nombre) {
  console.log('Nombre:', nombre);
  solicitarEdad();
}

// Función para procesar la edad
function procesarEdad(edad) {
  console.log('Edad:', edad);
  // Puedes seguir aquí con más funciones para procesar otros inputs
  rl.close(); // Cerrar la interfaz readline cuando hayas terminado de solicitar inputs
}

// Función para solicitar el nombre
function solicitarNombre() {
  rl.question('Ingresa tu nombre: ', (nombre) => {
    procesarNombre(nombre);
  });
}

// Función para solicitar la edad
function solicitarEdad() {
  rl.question('Ingresa tu edad: ', (edad) => {
    procesarEdad(edad);
  });
}

// Comenzar solicitando el nombre
solicitarNombre();
