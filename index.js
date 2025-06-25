import express from "express";
import cors from "cors";
import enviroments from "./src/api/config/enviroments.js";
import connection from "./src/api/database/db.js"

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
        message: "Hola mundo"
    });
});

/**
 * Login
 */

app.get("/login", async (req, res) => {
    try {
        let sql = `SELECT * FROM usuarios WHERE id_estado=1`
        let [result] = await connection.query(sql);

        res.status(200).json({
            message: result.length === 0
                ? "No se encontraron usuarios"
                : "Usuarios obtenidos",
            payload: result
        });
    } catch (error) {
        console.error("Error interno en el servidor", error);
        res.status(404).json({
            message: "Error al intentar obtener los usuarios",
            payload: error
        })
    }
});

app.get("/login/:id", async (req, res) => {
    try {
        let { id_usuario } = req.params;

        let sql = `SELECT * FROM usuarios WHERE id_usuario = ? `;

        let [result] = await connection.query(sql, [id_usuario]);

        res.status(200).json({
            message: result.length === 0
                ? `No se encontro el usuario con el id_usuario ${id_usuario}`
                : "Usuario obtenido",
            payload: result
        });

    } catch (error) {
        console.error("Error al obtener el usuario por id_usuario: ", error);
        res.status(404).json({
            message: "Error al intentar obtener el usuario por id_usuario",
            payload: error
        });
    }
});

app.post('/login', async (req, res) => {
    try {
        let { nombre, apellido, email, password, id_estado } = req.body;
        let fecha_alta = new Date();

        if (!nombre || !apellido || !email || !password || !id_estado) {
            res.status(400).json({
                error: "Faltan datos (nombre, apellido, email, password, id_estado)"
            });
        }

        let sql = `INSERT INTO usuarios (nombre, apellido, email, password, id_estado, fecha_alta) VALUES (?, ?, ?, ?, ?, ?)`;
        let [result] = await connection.query(sql, [nombre, apellido, email, password, id_estado, fecha_alta]);

        res.status(200).json({
            message: "Usuario creado",
            payload: result
        });

    } catch (error) {
        console.error("Error interno en el servidor: ", error);
        res.status(404).json({
            message: "Error al crear el usuario",
            payload: error.message
        })
    }
});

app.put("/login/:id", async (req, res) => {
    try {
        let { id_usuario } = req.params;
        let { nombre, apellido, email, password } = req.body;

        let sql = `UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, password = ? WHERE id_usuario = ?`;
        let [result] = await connection.query(sql, [nombre, apellido, email, password, id_usuario]);

        res.status(200).json({
            message: "Usuario actualizado con exito",
            payload: result
        });
    } catch (error) {
        console.error("Error interno en el servidor", error);
        res.status(404).json({
            message: "Error al intentar obtener el usuario",
            payload: error
        })
    }
});

app.delete("/login/:id/:id_estado", async (req, res) => {
    try {
        let { id, id_estado } = req.params;
        let idUsuario = parseInt(id);
        let estado = parseInt(id_estado);

        if (isNaN(idUsuario) || isNaN(estado)) {
            return res.status(400).json({
                message: "Parametros invalidos: id y estado deben ser numeros"
            });
        }

        let fecha_baja = new Date();

        let sql = `UPDATE usuarios SET id_estado = ?, fecha_baja = ? WHERE id_usuario = ?`;
        let [result] = await connection.query(sql, [estado, fecha_baja, idUsuario]);

        res.status(200).json({
            message: "Usuario dado de baja exitosamente",
            payload: result
        });
    } catch (error) {
        console.error("Error interno del servidor", error);
        res.status(500).json({
            message: "Error al intentar dar de baja al usuario",
            payload: error.message
        });
    }
});


/***
 * Productos
 */

app.post('/productos', async (req, res) => {
    try {
        let { nombre, precio, stock, img, categoria, descripcion, marca, fechaAlta } = req.body;
        let sql = `INSERT INTO productos (nombre, precio, stock, img, categoria, descripcion, marca, fechaAlta) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        let [result] = await connection.query(sql, [nombre, precio, stock, img, categoria, descripcion, marca, fechaAlta]);
        res.status(200).json({
            message: "Producto creado",
            payload: result
        });
    } catch (error) {
        console.error("Error interno en el servidor", error);
        res.status(404).json({
            message: "Error al intentar crear el producto",
            payload: error
        });
    }
});

app.get('/productos', async (req, res) => {
    try {
        let sql = `SELECT * FROM productos`;
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
        let sql = `SELECT * FROM productos WHERE id = ?`;
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