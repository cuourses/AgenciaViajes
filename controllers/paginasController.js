import { Viaje } from '../models/Viaje.js';


const paginaInicio = (req, res) => {
  res.render('../view/inicio.pug', {
    pagina: 'Inicio'
  });
}

const paginaNosotros = (req, res) => {
  res.render('../view/nosotros.pug', {
    pagina: 'Nosotros'
  });
}

const paginaViajes = async (req, res) => {
  // Consultar la BD
  const viajes = await Viaje.findAll();

  res.render('../view/viajes.pug', {
    pagina: 'Próximos Viajes',
    viajes
  });
}

const paginaTestimoniales = (req, res) => {

  res.render('../view/viajes.pug', {
    pagina: 'Testimoniales'
  });
}

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales
}