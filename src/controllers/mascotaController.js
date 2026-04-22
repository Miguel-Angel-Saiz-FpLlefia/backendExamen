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

export { getAllMascotas, getMascotaById };
