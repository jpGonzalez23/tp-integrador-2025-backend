import express from "express";
import cors from "cors";
import enviroments from "./api/config/enviroments.js";
import connection from "./src/api/database/db.js"

const app = express();
const PORT = enviroments.port;

app.use(cors());
app.use(express.json());

/**
 * Login
 */

app.get('/login', (res, req) => {
    try {
        let sql = `SELECT * FROM usuarios`
        let [rows] = connection.query(sql);

        res.status(200).json({
            message: rows.length === 0 ? "No se encontraron usuarios" : "Usuarios obtenidos",
            payload: rows
        });
    } catch (error) {
        console.error("Error interno en el servidor", error);
        res.status(404).json({
            message: "Error al intentar obtener los usuarios",
            payload: error
        })
    }
});

app.get('/login/:id', (req, res) => {
    try {
        let { id } = req.params;

        let sql = `SELECT * FROM usuarios WHERE id = ? `;

        let [rows] = connection.query(sql);

        res.status(200).json({
            message: rows.length === 0 ? `No se encontro el usuario con el id ${id}` : "Usuario obtenido",
            payload: rows
        });

    } catch (error) {
        console.error("Error interno en el servidor", error);
        res.status(404).json({
            message: "Error al intentar obtener el usuario",
            payload: error
        })
    }
});

app.post('/logn', (res, req) => {
    try {
        let { nombre, apellido, email, password } = req.body;

        let sql = `INSERT INTO usuarios (nombre, apellido, email, password) VALUES (?, ?, ?, ?)`;

        let [rows] = connection.query(sql, [nombre, apellido, email, password]);

        res.status(200).json({
            message: "Usuario creado",
            payload: rows
        });
    } catch (error) {
        console.error("Error interno en el servidor", error);
        res.status(404).json({
            message: "Error al intentar obtener el usuario",
            payload: error
        })
    }
});

app.put('/login/:id', (req, res) => {
    try {
        let { id } = req.params;
        let { nombre, apellido, email, password } = req.body;

        let sql = `UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, password = ? WHERE id = ?`;

        let [rows] = connection.query(sql, [nombre, apellido, email, password, id]);

        res.status(200).json({
            message: "Usuario actualizado",
            payload: rows
        });
    } catch (error) {
        console.error("Error interno en el servidor", error);
        res.status(404).json({
            message: "Error al intentar obtener el usuario",
            payload: error
        })
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});