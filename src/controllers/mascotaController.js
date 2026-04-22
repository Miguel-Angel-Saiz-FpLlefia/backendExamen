import Mascota from "../models/mascotaModel.js";
import mongoose from "mongoose";

// const mascotas = [
//   {
//     id: "1",
//     nombre: "Labrador",
//     tipo: "Perro",
//     raza: "Labrador",
//     foto: "https://imagenMascota1.jpg",
//   },
//   {
//     id: "2",
//     nombre: "Chihuhua",
//     tipo: "Perro",
//     raza: "Chihuhua",
//     foto: "https://imagenMascota2.jpg",
//   },
// ];

async function getAllMascotas(req, res) {
  try {
    const dades = await Mascota.find().sort({ createdAt: -1 });
    res.json({
      dades: dades,
      total: dades.length,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getMascotaById(req, res) {
  try {
    const { id } = req.params;
    const dada = await Mascota.findById(id);
    res.json({
      dada,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function crearMascota(req, res) {
  try {
    const { nombre, tipo, raza, foto } = req.body;
    if (!nombre || !tipo || !raza || !foto) {
      return res.json(400).json({ error: "Faltan datos por introducir" });
    }
    const mascota = await Mascota.create({ nombre, tipo, raza, foto });
    res.status(201).json({ mascota: mascota });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function editarMascota(req, res) {
  try {
    const mascotaActual = await Mascota.findById(req.params.id);
    if (!mascotaActual) {
      return res.status(404).json({ error: "Mascota no encontrada", id });
    }
    const actualitzada = await Mascota.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    res.status(200).json({
      mascota: actualitzada,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
}

async function eliminarMascota(req, res) {
  try {
    const { id } = req.params;
    const eliminada = await Mascota.findByIdAndDelete(id);
    if (!eliminada) {
      return res.status(404).json({
        error: "Usuario no encontrado",
        id: id,
      });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export {
  getAllMascotas,
  getMascotaById,
  crearMascota,
  editarMascota,
  eliminarMascota,
};
