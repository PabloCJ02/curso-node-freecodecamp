const promesaCumplida = true;

// Crear una promesa.
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve('¡Promesa cumplida!');
    } else {
      reject('Promesa rechazada... ');
    }
  }, 3000);
});

// miPromesa.then((valor) => {
//   console.log(valor);
// });

// Definir dos funciones que manejen
// cuando es aceptada y rechazada.
const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);


// Ejemplo:

const estatusPedido = () => {
  const estatus = Math.random() < 0.8;
  console.log(estatus);
  return estatus;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve('¡Pedido exitoso! Su pizza esta en camino.');
    } else {
      reject('Ocurrio un error. Por favor intente nuevamente.');
    }
  }, 3000);
});

// const manejarPedido = (mensajeDeConfirmacion) => {
//   console.log(mensajeDeConfirmacion);
// };

// const rechazarPedido = (mensajeDeError) => {
//   console.log(mensajeDeError);
// };

// miPedidoDePizza.then(manejarPedido, rechazarPedido);

//  Otra forma de hacerlo
miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })
  .catch((mensajeDeError) => {
    console.log(mensajeDeError);
  });