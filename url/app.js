
// const miUrl = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

// // Nombre del host
// console.log(miUrl.hostname);

// // Path (camino)
// console.log(miUrl.pathname);

// // Protocolo
// console.log(miUrl.protocol);


// console.log(miUrl.searchParams);
// console.log(typeof miUrl.searchParams);

// console.log(miUrl.searchParams.get('ordenarPor'));
// console.log(miUrl.searchParams.get('nivel'));

const nuevaURL = new URL('https://www.ejemplo.org');

nuevaURL.pathname = '/cursos/programacion';
nuevaURL.search = '?ordenar=vistas&nivel=1';

console.log(nuevaURL.toString());