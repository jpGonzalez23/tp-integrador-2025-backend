/**
 * Importaciones
 */
import express from "express";
import cors from "cors";
import enviroments from "./src/api/config/enviroments.js";
import { loginRoutes, productosRoutes, carritoRoutes, viewRoutes } from "./src/api/routes/index.js";
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { __dirname, join } from "./src/api/utils/index.js";

const app = express();
const PORT = enviroments.port;

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
 * Dashboard
 */

app.use("/dashboard", viewRoutes)

/**
 * Escuchando el PORT
 **/
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});