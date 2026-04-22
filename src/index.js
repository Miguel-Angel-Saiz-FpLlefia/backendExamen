import express from "express";
import "dotenv/config";
import cors from "cors";
import mascotasRouter from "./routes/mascotasRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/mascotas", mascotasRouter);

app.get("/api", (req, res) => {
  res.json({
    mensaje: "Bienvenido a la api de animales del examen",
    version: "1.0.0",
    endpoints: "/api/mascotas",
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor lanzado en el puerto ${PORT}`);
});
