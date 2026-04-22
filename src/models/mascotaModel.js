import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es requerido"],
      trim: true,
    },
    tipo: {
      type: String,
      required: [true, "El tipo es requerido"],
      trim: true,
    },
    raza: {
      type: String,
      required: [true, "La raza es requerida"],
      trim: true,
    },
    foto: {
      type: String,
      required: [true, "La imagen es requerida"],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Mascota", mascotaSchema);
