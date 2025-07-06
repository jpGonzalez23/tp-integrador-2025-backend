// importaciones
import connection from '../database/db.js';

// promise para crear un carrito
const crearCarrito = async (id_usuario, fecha_creacion, estado = 1) => {
    let sql = `INSERT INTO carrito (id_usuario, fecha_creacion, estado) VALUES (?, ?, ?)`;
    return await connection.query(sql, [id_usuario, fecha_creacion, estado]);
}

// promise para agregar un producto al carrito
const agregarProductoACarrito = async (id_carrito, id_producto, cantidad) => {
    let sql = `INSERT INTO carrito_producto (id_carrito, id_producto, cantidad) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE cantidad = VALUES(cantidad)`;
    return await connection.query(sql, [id_carrito, id_producto, cantidad]);
}

// promise para obtener el carrito de un usuario
const obtenerCarritoDeUsuario = async (id_usuario) => {
    let sql = `
    SELECT p.nombre, p.precio, cp.cantidad
    FROM carrito_producto cp
    JOIN carrito c ON cp.id_carrito = c.id_carrito
    JOIN productos p ON cp.id_producto = p.id_producto
    WHERE c.id_usuario = ? AND c.estado = 1
  `;
    return await connection.query(sql, [id_usuario]);
}

// promise para cambiar el estado del carrito
const cambiarEstadoCarrito = async (id_carrito) => {
    let sql = `UPDATE carrito SET estado = 2 WHERE id_carrito = ?`;
    return await connection.query(sql, [id_carrito]);
}

// Exportar las funciones
export default {
    crearCarrito,
    agregarProductoACarrito,
    obtenerCarritoDeUsuario,
    cambiarEstadoCarrito,
}