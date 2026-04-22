import express from "express";
import {
  getAllMascotas,
  getMascotaById,
} from "../controllers/mascotaController.js";

const mascotasRouter = express.Router();

mascotasRouter.get("/", getAllMascotas);
mascotasRouter.get("/:id", getMascotaById);

export default mascotasRouter;
