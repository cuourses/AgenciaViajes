import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';


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

const paginaTestimoniales = async (req, res) => {

  try {
    // Obtenamos los testimoniles de la bd
    const testimoniales = await Testimonial.findAll();

    res.render('../view/testimoniales.pug', {
      pagina: 'Testimoniales',
      testimoniales
    });

  } catch (error) {
    console.log(error);
  }


}

const paginaDetalleViaje = async (req, res) => {

  // Optenemos el comodiin
  const { slug } = req.params

  try {
    const viaje = await Viaje.findOne({ where: { slug } })

    res.render('../view/viaje.pug', {
      pagina: 'Información Viaje',
      viaje
    })

  } catch (error) {
    console.log(error);
  }

}

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje
}