import connection from "../database/db.js";

// promise para seleccionar todos los productos
const selectAllProducts = async () => {
    let sql = `SELECT * FROM productos`
    return await connection.query(sql);
}

// promise para seleccionar todos los productos ordenados por nombre
const selectAllProductsOrder = async (orden = "az") => {
    let sql = `SELECT * FROM productos`;

    if (orden === "az") {
        sql += ` ORDER BY nombre ASC`;
    }
    else if (orden === "za") {
        sql += ` ORDER BY nombre DESC`;
    }

    return await connection.query(sql);
}

// promise para seleccionar un producto por ID
const selectProductoFromId = async (id_producto) => {
    let sql = `SELECT * FROM productos WHERE id_producto = ?`;
    return await connection.query(sql, [id_producto]);
}

// promise para insertar un producto
const insertProducto = async (nombre, descripcion, precio, stock, img, categoria, id_estado, fecha_de_alta) => {
    let sql = `INSERT INTO productos (nombre, descripcion, precio, stock, img, categoria, id_estado, fecha_de_alta) VALUES (?, ?, ?, ?, ?, ?, ?, ? )`;
    return await connection.query(sql, [nombre, descripcion, precio, stock, img, categoria, id_estado, fecha_de_alta]);
}

// promise para actualizar un producto
const updateProducto = async (id_producto, nombre, descripcion, precio, stock, img, categoria) => {
    let sql = `UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ?, img = ?, categoria = ? WHERE id_producto = ?`;
    return await connection.query(sql, [nombre, descripcion, precio, stock, img, categoria, id_producto]);
}

// promise para actualizar el estado de un producto
const updateProductoEstado = async (id_producto, fecha_de_modificacion, id_estado) => {
    let sql = `UPDATE productos SET id_estado = ?, fecha_de_modificacion = ? WHERE id_producto = ?`;
    return await connection.query(sql, [id_estado, fecha_de_modificacion, id_producto]);
}

// promise para eliminar un producto
const deleteProducto = async (id_producto) => {
    let sql = `DELETE FROM productos WHERE id_producto = ? `
    return await connection.query(sql, [id_producto]);
}

// Exportar las funciones
export default {
    selectAllProducts,
    selectProductoFromId,
    selectAllProductsOrder,
    insertProducto,
    updateProducto,
    updateProductoEstado,
    deleteProducto
}