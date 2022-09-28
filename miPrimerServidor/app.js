
// const http = require('http');


// const servidor = http.createServer((req, res) => {
//     console.log('solicitud nueva')
//     res.end('Hola, mundo');
// });

// const puerto = 3000;

// servidor.listen(puerto, () => {
//   console.log(`El servidor esta escuchando en el puerto http://localhost:${puerto}/...`);
// });






const http = require('http');

const servidor = http.createServer((req, res) => {

//   console.log('===> Objeto req (solicitud)');
  // console.log(req);
//   console.log(req.url);
//   console.log(req.method);
//   console.log(req.headers);

  console.log('===> Objeto res (respuesta)');
//   console.log(res);

//   console.log(res.statusCode);
//   res.statusCode = 404;
//   console.log(res.statusCode);
  
  res.setHeader('content-type', 'application/json');
  console.log(res.getHeaders());

  res.end('Hola, mundo');
});

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});