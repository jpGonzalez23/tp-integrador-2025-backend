// importaciones
import connection from "../database/db.js";

// promise para seleccionar todos los user
const selecAllLogin = async () => {
    let sql = `SELECT * FROM usuarios WHERE id_estado=1`
    return await connection.query(sql);
}

// promise para seleccionar un user por ID
const selectLoginFromId = async (id) => {
    let sql = `SELECT * FROM usuarios WHERE id_usuario = ? `;
    return await connection.query(sql, [id]);
}

// promise para insertar un user
const insertLogin = async (name, username, email, password) => {
    let sql = `INSERT INTO usuarios (nombre, apellido, email, password, id_estado, fecha_alta) VALUES (?, ?, ?, ?, ?, ?)`;
    return await connection.query(sql, [name, username, email, password, id_estado, fecha_alta]);
}

// promise para actualizar un user
const updateLogin = async (id, name, username, email, password) => {
    let sql = `UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, password = ? WHERE id_usuario = ?`;
    return await connection.query(sql, [name, username, email, password, id]);
}

// promise para actualizar el estado de un user
const updateLoginState = async (id_user, id_state, fecha_de_modificaciones) => {
    let sql = `UPDATE usuarios SET id_estado = ?, fecha_baja = ? WHERE id_usuario = ?`;
    return await connection.query(sql, [id_state, fecha_de_modificaciones, id_user]);
}

// promise para eliminar un user
const deleteLogin = async (id_user) => {
    let sql = `DELETE FROM usuarios WHERE id_usuario = ? `
    return await connection.query(sql, [id_user]);
}

export default {
    selecAllLogin,
    selectLoginFromId,
    insertLogin,
    updateLogin,
    updateLoginState,
    deleteLogin
}