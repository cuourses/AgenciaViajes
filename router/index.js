import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('../view/inicio.pug');
});

router.get('/nosotros', (req, res) => {
  res.render('../view/nosotros.pug');
});


export default router;