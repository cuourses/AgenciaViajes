import express from 'express';
import router from './router/index.js';


const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

app.use('/', router);


// Arrancamos el servidor
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});