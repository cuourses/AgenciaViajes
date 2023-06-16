import express from 'express';
import router from './router/index.js';


const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Definir el año
app.use((req, res, next) => {
  const year = new Date();
  const yearActual = year.getFullYear();
  res.locals.yearActual = yearActual;
  res.locals.nombreSitio = 'Agencia de Viajes';
  next();
});

// Definir carpeta public
app.use(express.static('public'));

// Agregar router
app.use('/', router);


// Arrancamos el servidor
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});