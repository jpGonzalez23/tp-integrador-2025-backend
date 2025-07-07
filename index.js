/**
 * Importaciones
 */
import express from "express";
import cors from "cors";
import enviroments from "./src/api/config/enviroments.js";
import { userRoutes, productosRoutes, carritoRoutes, viewRoutes, authRoutes } from "./src/api/routes/index.js";
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { __dirname, join } from "./src/api/utils/index.js";

// Importaciones de utilidades para manejar rutas y directorios
const app = express();
const PORT = enviroments.port;

// Configuración del servidor
app.set("view engine", "ejs");
app.set("views", join(__dirname, "src/views"));
app.use(express.static(join(__dirname, "src/public")));


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
 * Dashboard
 */

app.use("/dashboard", viewRoutes);

/**
 * Usuarios
 */
app.use("/api/user", userRoutes);

/**
 * Login
 */

app.use("/login", authRoutes)

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