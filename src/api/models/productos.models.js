import connection from "../database/db.js";

const selectAllProducts = async () => {
    let sql = `SELECT * FROM productos WHERE id_estado = 1`
    return await connection.query(sql);
}

const selectProductoFromId = async (id_producto) => {
    let sql = `SELECT * FROM productos WHERE id_producto = ?`;
    return await connection.query(sql, [id_producto]);
}

const insertProducto = async (nombre, descripcion, precio, stock, img, categoria, id_estado, fecha_de_alta) => {
    let sql = `INSERT INTO productos (nombre, descripcion, precio, stock, img, categoria, id_estado, fecha_de_alta) VALUES (?, ?, ?, ?, ?, ?, ?, ? )`;
    return await connection.query(sql, [nombre, descripcion, precio, stock, img, categoria, id_estado, fecha_de_alta]);
}

const updateProducto = async (id_producto, nombre, descripcion, precio, stock, img, categoria) => {
    let sql = `UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ?, img = ?, categoria = ? WHERE id_producto = ?`;
    return await connection.query(sql, [nombre, descripcion, precio, stock, img, categoria, id_producto]);
}

const updateProductoEstado = async (id_producto, fecha_de_modificacion, id_estado) => {
    let sql = `UPDATE productos SET id_estado = ?, fecha_de_modificacion = ? WHERE id_producto = ?`;
    return await connection.query(sql, [id_estado, fecha_de_modificacion, id_producto]);
}

const deleteProducto = async (id_producto) => {
    let sql = `DELETE FROM productos WHERE id_producto = ? `
    return await connection.query(sql, [id_producto]);
}

export default {
    selectAllProducts,
    selectProductoFromId,
    insertProducto,
    updateProducto,
    updateProductoEstado,
    deleteProducto
}