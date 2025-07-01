import express from "express";
import cors from "cors";
import enviroments from "./src/api/config/enviroments.js";
import { loginRoutes, productosRoutes } from "./src/api/routes/index.js";
import { loggerUrl } from "./src/api/middlewares/middlewares.js";

const app = express();
const PORT = enviroments.port;


app.use(express.json());
app.use(cors());

/*** 
 *  Middlewares
**/
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
app.use("/login", loginRoutes);

/***
 * Productos
 */
app.use("/api/productos", productosRoutes);


/**
 * Escuchando el PORT
 **/
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});