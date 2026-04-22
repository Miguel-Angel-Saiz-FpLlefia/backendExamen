const mascotas = [
  {
    id: "1",
    nombre: "Labrador",
    tipo: "Perro",
    raza: "Labrador",
    foto: "https://imagenMascota1.jpg",
  },
  {
    id: "2",
    nombre: "Chihuhua",
    tipo: "Perro",
    raza: "Chihuhua",
    foto: "https://imagenMascota2.jpg",
  },
];

function getAllMascotas(req, res) {
  res.json({
    dades: mascotas,
    total: mascotas.length,
  });
}

function getMascotaById(req, res) {
  const { id } = req.params;
  const index = mascotas.findIndex((c) => c.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Mascota no encontrada", id });
  }
  res.json(mascotas[index]);
}

function crearMascota(req, res) {
  const { nombre, tipo, raza, foto } = req.body;
  const id = String(mascotas.length + 1);
  const nova = { id, nombre, tipo, raza, foto };
  mascotas.push(nova);
  res.status(201).json({ mascota: nova });
}

function editarMascota(req, res) {
  const { id } = req.params;
  const index = mascotas.findIndex((c) => c.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Mascota no encontrada", id });
  }
  mascotas[index] = { ...mascotas[index], ...req.body, id };
  res.json({ mascota: mascotas[index] });
}

function eliminarMascota(req, res) {
  const { id } = req.params;
  const index = mascotas.findIndex((c) => c.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Mascota no encontrada", id });
  }
  mascotas.splice(index, 1);
  res.status(204).send();
}

export {
  getAllMascotas,
  getMascotaById,
  crearMascota,
  editarMascota,
  eliminarMascota,
};
