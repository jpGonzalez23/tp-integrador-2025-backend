// importaciones
import Login from "../models/login.models.js";

// Get - Obtener todos los usuarios
export const getAllUser = async (req, res) => {
    try {
        const [result] = await Login.selecAllLogin();

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

// Get - Obtener un usuario por ID
export const getUserFromId = async (req, res) => {
    try {
        let { id_usuario } = req.params;

        if (!id_usuario) {
            return res.status(400).json({
                error: "Se requiere un id para obtener un usuario"
            });
        }

        const [result] = Login.selectLoginFromId(id_usuario);

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

// Post - Crear un usuario
export const createUser = async (req, res) => {
    try {

        let { nombre, apellido, email, password } = req.body;
        let fecha_alta = new Date();
        let id_estado = 1;

        if (!nombre || !apellido || !email || !password) {
            res.status(400).json({
                error: "Faltan campos requeridos (nombre, apellido, email, password)"
            });
        }

        const [result] = Login.insertLogin(nombre, apellido, email, password, id_estado, fecha_alta);

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

// Put - Actualizar un usuario
export const updateUser = async (req, res) => {
    try {
        let { id_usuario } = req.params;
        let { nombre, apellido, email, password } = req.body;

        if (!nombre || !apellido || !email || !password) {
            res.status(400).json({
                error: "Faltan campos requeridos (nombre, apellido, email, password)"
            });
        }

        const [result] = Login.updateLogin(id_usuario, nombre, apellido, email, password);

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

// Put - Actualizar el estado de un usuario
export const updateStateUser = async (req, res) => {
    try {
        let { id_usuario, id_estado } = req.params;

        let idUsuario = parseInt(id_usuario);
        let idEstado = parseInt(id_estado);

        if (isNaN(idUsuario) || isNaN(idEstado)) {
            return res.status(400).json({
                error: "Parametros invalidos, id_usuario y id_estado deben ser numeros"
            });
        }

        let fecha_baja = new Date();

        const [result] = Login.updateLoginState(idUsuario, idEstado, fecha_baja);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: `No se encontro un usuario con id: ${idUsuario}`
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

// Delete - Eliminar un usuario
export const removeUser = async (req, res) => {
    try {
        let { id_usuario } = req.params;

        if (!id_usuario) {
            return res.status(400).josn({
                Error: "Se requiere un id para eliminar un usuario"
            })
        }

        const [result] = Login.deleteLogin(id_usuario);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                Error: `No se encontro un usuario con el id: ${id_usuario}`
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