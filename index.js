import express from "express";
import cors from "cors";
import enviroments from "./src/api/config/enviroments.js";
import connection from "./src/api/database/db.js"
import loginRoutes from "./src/api/routes/login.routes.js";
// import productosRoutes from "./src/api/routes/productos.routes.js"

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

app.post('/productos', async (req, res) => {
    try {
        let { nombre, descripcion, precio, stock, img, categoria, id_estado, fecha_de_alta } = req.params;
        let sql = `SELECT * FROM producto WHERE id_estado = 1`;
        let [result] = await connection.query(sql);

        res.status(200).json({
            message: result.length === 0
                ? "Productos obtenidos con exito"
                : " Prodcutos no obtenidos con exitos"
        });
    } catch (error) {
        console.error("Error interno al obtener los productos: ", error);
        res.status(404).json({
            message: "Error interno del servidor",
            payload: error
        });
    }
});

app.get('/productos', async (req, res) => {
    try {
        let sql = `SELECT * FROM producto WHERE id_estado = 1`;
        let [result] = await connection.query(sql);
        res.status(200).json({
            message: result.length === 0
                ? "No se encontraron productos"
                : "Productos obtenidos",
            payload: result
        });
    } catch (error) {
        console.error("Error interno en el servidor", error);
        res.status(404).json({
            message: "Error al intentar obtener los productos",
            payload: error
        });
    }
});

app.get('/productos/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let sql = `SELECT * FROM producto WHERE id = ?`;
        let [result] = await connection.query(sql, [id]);
        res.status(200).json({
            message: result.length === 0 ? `No se encontro el producto con el id ${id}` : "Producto obtenido",
            payload: result
        });
    } catch (error) {
        console.error("Error interno en el servidor", error);
        res.status(404).json({
            message: "Error al intentar obtener el producto",
            payload: error
        });
    }
});

app.put('/productos/:id', async (req, res) => {
    try {

    } catch (error) {

    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});