import express from "express";
import {
  getAllMascotas,
  getMascotaById,
  crearMascota,
  editarMascota,
  eliminarMascota,
} from "../controllers/mascotaController.js";

const mascotasRouter = express.Router();

mascotasRouter.get("/", getAllMascotas);
mascotasRouter.get("/:id", getMascotaById);
mascotasRouter.post("/", crearMascota);
mascotasRouter.put("/:id", editarMascota);
mascotasRouter.delete("/:id", eliminarMascota);

export default mascotasRouter;
