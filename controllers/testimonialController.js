import { Testimonial } from '../models/Testimoniales.js';


const guardarTestimoniales = async (req, res) => {

  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === '') {
    errores.push({ mensaje: 'El nombre esta vacio' })
  }

  if (correo.trim() === '') {
    errores.push({ mensaje: 'El correo esta vacio' })
  }

  if (mensaje.trim() === '') {
    errores.push({ mensaje: 'El mensaje esta vacio' })
  }

  if (errores.length > 0) {
    res.render('../view/testimoniales.pug', {
      pagina: 'Testimoniales',
      errores,
      nombre,
      correo,
      mensaje
    })
  } else {

    try {

      await Testimonial.create({
        nombre,
        correo,
        mensaje
      });

      res.redirect('/testimoniales');

    } catch (error) {
      console.log(error);
    }

  }
};

export {
  guardarTestimoniales,
}