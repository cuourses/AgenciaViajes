import express from 'express';
import router from './router/index.js';
import db from './config/db.js';


const app = express();

// Conectar con la BASE DATOS
db.authenticate()
  .then(() => console.log('Base datos conectada'))
  .catch(error => console.log(error))

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

// habilitar body parcel para leer datos de formulario
app.use(express.urlencoded({ extended: true }));

// Definir carpeta public
app.use(express.static('public'));

// Agregar router
app.use('/', router);


// Arrancamos el servidor
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});