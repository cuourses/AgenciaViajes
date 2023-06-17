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

const paginaViajes = (req, res) => {
  res.render('../view/viajes.pug', {
    pagina: 'Viajes'
  });
}

const paginaTestimoniales = (req, res) => {
  res.render('../view/viajes.pug', {
    pagina: 'Viajes'
  });
}

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales
}