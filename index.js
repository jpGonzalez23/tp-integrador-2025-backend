import express from "express";
import cors from "cors";
import enviroments from "./src/api/config/enviroments.js";
import connection from "./src/api/database/db.js";
import loginRoutes from "./src/api/routes/login.routes.js";
import productosRoutes from './src/api/routes/productos.routes.js'

const app = express();
const PORT = enviroments.port;

app.use(cors());
app.use(express.json());

/***
 * Middlewares
 */

app.use((req, res, next) => {
    console.log(`Fecha: ${new Date().toLocaleString()} - Method: ${req.method} - URL: ${req.url}`);
    next();
})

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
app.use("/productos", productosRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});