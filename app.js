

//importar express que se instalo previamente
import express from "express";

//importar router salud
import saludRoutes from "./routes/salud.routes.js";

//Crea una aplicacion Express, a partir de este objeto
//se podra configurar rutas y middlewares

const app = express();

// Agrega un middleware que permite interpretar cuerpos JSON de3 las peticiones HTTP
app.use(express.json());

//Registrar las rutas de salud en la aplicación
app.use(saludRoutes);




export default app;