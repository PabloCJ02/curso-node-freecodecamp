const fs = require('fs');

console.log('Antes de leer el archivo...');
const archivo = fs.readFileSync('index.html', 'utf-8');
console.log(archivo)
console.log('Despues de leer el archivo...');
  

fs.renameSync('index.html', 'main.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Nombre cambiado exitosamente.');
});

console.log('Depues de cambiar el nombre del archivo...');
  

fs.appendFileSync('index.html', '<p>Hola</p>', (err) => {
    if (err) {
      throw err;
    }
    console.log('Archivo actualizado');
  });
  
console.log('Depues de agregar contenido al archivo...');


fs.writeFileSync('index.html', 'Contenido nuevo', (err) => {
  if (err) {
    throw err;
  }
  console.log('Contenido reemplazado exitosamente.');
});

console.log('Depues de reemplazar el contenido del archivo...');

fs.unlinkSync('main.html', (err) => {
    if (err) {
      throw err;
    }
    console.log('Archivo eliminado');
  });
  
console.log('Depues de eliminar un archivo...');