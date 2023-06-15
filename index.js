import express from 'express';
import router from './router/index.js';


const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Agregar router
app.use('/', router);


// Arrancamos el servidor
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});