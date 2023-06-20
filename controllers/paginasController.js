import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';


const paginaInicio = async (req, res) => {

  const promiseDB = [];

  promiseDB.push(Viaje.findAll({ limit: 3 }));
  promiseDB.push(Testimonial.findAll({ limit: 3 }));

  try {
    // Obtenamos los testimoniles de la bd
    const resultado = await Promise.all(promiseDB);

    res.render('../view/inicio.pug', {
      pagina: 'Inicio',
      clase: 'home',
      viajes: resultado[0],
      testimoniales: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }

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