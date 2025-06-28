import connection from "../database/db.js";

export const getUsuarios = async (req, res) => {
    try {
        let sql = `SELECT * FROM usuarios WHERE id_estado=1`
        let [result] = await connection.query(sql);

        res.status(200).json({
            message: result.length === 0
                ? "No se encontraron usuarios"
                : "Usuarios obetenidos",
            payload: result
        });
    } catch (error) {
        res.status(500).json({
            message: "Error interno",
            payload: error.message
        })
    }
}

export const getUsuariosPorId = async (req, res) => {
    try {
        let { id_usuario } = req.params;
        
        if (!id_usuario) {
            return res.status(400).json({
                error: "Se requiere un id para obtener un producto"
            });
        }

        let sql = `SELECT * FROM usuarios WHERE id_usuario = ? `;
        let [result] = await connection.query(sql, [id_usuario]);

        res.status(200).json({
            message: result.length === 0
                ? `No se encontro el usuario con el id_usuario ${id_usuario}`
                : "Usuarios obtenido",
            payload: result
        });
    } catch (error) {
        console.error("Error al obtener el usuario por id_usuario: ", error);
        res.status(500).json({
            message: "Error al intentar obtener el usuario por id_usuario",
            payload: error.message
        });
    }
}

export const crearUsuario = async (req, res) => {
    let { nombre, apellido, email, password } = req.body;
    let fecha_alta = new Date();
    let id_estado = 1;

    if (!nombre || !apellido || !email || !password) {
        res.status(400).json({
            error: "Faltan campos requeridos (nombre, apellido, email, password)"
        });
    }

    try {
        let sql = `INSERT INTO usuarios (nombre, apellido, email, password, id_estado, fecha_alta) VALUES (?, ?, ?, ?, ?, ?)`;
        let [result] = await connection.query(sql, [nombre, apellido, email, password, id_estado, fecha_alta]);

        res.status(201).json({
            message: "Usuario creado",
            payload: result
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el usuario",
            payload: error.message
        });
    }
}

export const actualizarUsuario = async (req, res) => {
    let { id_usuario } = req.params;
    let { nombre, apellido, email, password } = req.body;

    if (!nombre || !apellido || !email || !password) {
        res.status(400).json({
            error: "Faltan campos requeridos (nombre, apellido, email, password)"
        });
    }

    try {
        let sql = `UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, password = ? WHERE id_usuario = ?`;
        let [result] = await connection.query(sql, [nombre, apellido, email, password, id_usuario]);

        res.status(200).json({
            message: "Usuario actualizado con exito",
            payload: result
        });
    } catch (error) {
        console.error("Error interno en el servidor", error);
        res.status(404).json({
            message: "Error al actualizar usuario",
            payload: error.message
        })
    }
}

export const actualizarEstadoUsuario = async (req, res) => {
    try {
        let { id_usuario, id_estado } = req.params;

        let idUsuario = parseInt(id_usuario);
        let idEstado = parseInt(id_estado);

        if (isNaN(idUsuario) || isNaN(idEstado)) {
            return res.status(400).json({
                error: "Parametros invalidos, id_usuario y id_estado deben ser nuemros"
            });
        }

        let fecha_baja = new Date();

        let sql = `UPDATE usuarios SET id_estado = ?, fecha_baja = ? WHERE id_usuario = ?`;
        let [result] = await connection.query(sql, [idEstado, fecha_baja, idUsuario]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: `No se encontro un usuario con id: ${idUsuario}`
            });
        }

        return res.status(200).json({
            message: `Usuario con id ${idUsuario} se le actualizo el estado correctamente`
        });
        
    } catch (error) {
        console.error("Error al actualizar el usuario: ", error);
        res.status(500).json({
            message: `Error al actualizar el usuario`,
            payload: error.message
        });
    }
}

export const eliminarUsuario = async (req, res) => {
    let { id_usuario } = req.params;

    if (!id_usuario) {
        return res.status(400). josn({
            error: "Se requiere un id para eliminar un usuario"
        })
    }

    try {
        let sql = `DELETE FROM usuarios WHERE id_usuario = ? `
        let [result] = await connection.query(sql, [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: `no se encontro un usuario con el id: ${id_usuario}`
            });
        }

        return res.status(200).json({
            message: `Usuario con id ${id_usuario} se elimino correctamente`
        });
    } catch (error) {
        console.error("");
        res.status(500).josn({
            message: "Error al eliminar un usuario",
            payload: error.message
        })
    }
}