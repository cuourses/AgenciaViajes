import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('../view/inicio.pug', {
    pagina: 'Inicio'
  });
});

router.get('/nosotros', (req, res) => {
  res.render('../view/nosotros.pug', {
    pagina: 'Nosotros'
  });
});

router.get('/testimoniales', (req, res) => {
  res.render('../view/testimoniales.pug', {
    pagina: 'Testimoniales'
  });
});

router.get('/viajes', (req, res) => {
  res.render('../view/viajes.pug', {
    pagina: 'Viajes'
  });
});


export default router;