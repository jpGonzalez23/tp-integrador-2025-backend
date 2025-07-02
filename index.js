/**
 * Importaciones
 */
import express from "express";
import cors from "cors";
import enviroments from "./src/api/config/enviroments.js";
import { loginRoutes, productosRoutes, carritoRoutes } from "./src/api/routes/index.js";
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { join } from "./src/api/utils/index.js";

const app = express();
const PORT = enviroments.port;

// app.set("view engine", "ejs");

// app.set("views", join("src/views"));

// app.use(express.static(join, "src/public"));


/*** 
 *  Middlewares
**/
app.use(express.json());
app.use(cors());
app.use(loggerUrl);

/**
 * Rutas
 */

app.get("/", (req, res) => {
    res.status(200).json({
        message: "La API funciona correctamente"
    });
});

/**
 * Login
 */
app.use("/api/login", loginRoutes);

/***
 * Productos
 */
app.use("/api/productos", productosRoutes);

/**
 * Carrito
 */
app.use("/api/carrito", carritoRoutes);


/**
 * Escuchando el PORT
 **/
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});