import Productos from "../models/productos.models.js";

export const getProductos = async (req, res) => {
    try {
        // let sql = `SELECT * FROM productos WHERE id_estado = 1`
        // let [result] = await connection.query(sql);
        const [result] = await Productos.selectAllProducts();

        res.status(200).json({
            message: result.length === 0
                ? "No se encontraron productos"
                : "Productos encontrados",
            payload: result
        });

    } catch (error) {
        console.error("Erron al encontrar productos", error);

        res.status(500).json({
            message: "Error al obtener los productos",
            payload: error.message
        });
    }
}

export const getProductosPorId = async (req, res) => {
    try {
        let { id } = req.params;

        // if (!id_producto) {
        //     return res.status(400).json({
        //         error: "Se requiere un ID para buscar un producto"
        //     });
        // }

        // let sql = `SELECT * FROM productos WHERE id_producto = ?`;
        // let [result] = await connection.query(sql, [id_producto]);

        const [result] = await Productos.selectProductoFromId(id);

        res.status(200).json({
            message: result.length === 0
                ? "No se encontro el producto buscado"
                : "Producto encontrado",
            payload: result
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el producto",
            payload: error.message
        });
    }
}

export const crearProducto = async (req, res) => {
    try {
        let { nombre, descripcion, precio, stock, img, categoria } = req.body;
        let fecha_de_alta = new Date();
        let id_estado = 1;

        if (!nombre || !descripcion || !precio || !stock || !img || !categoria) {
            return res.status(400).json({
                error: "Faltan campos requeridos (nombre, descripcion, precio, stock, img, categoria)"
            });
        }
        // let sql = `INSERT INTO productos (nombre, descripcion, precio, stock, img, categoria, id_estado, fecha_de_alta) VALUES (?, ?, ?, ?, ?, ?, ?, ? )`;
        // let [result] = await connection.query(sql, [nombre, descripcion, precio, stock, img, categoria, id_estado, fecha_de_alta]);

        const [result] = await Productos.insertProducto(nombre, descripcion, precio, stock, img, categoria, id_estado, fecha_de_alta);

        res.status(201).json({
            message: "Producto creado con exitos",
            payload: result
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el producto",
            payload: error.message
        });
    }
}

export const actualizarProducto = async (req, res) => {
    let { id } = req.params;
    let { nombre, descripcion, precio, stock, img, categoria } = req.body;

    // if (!id_producto || isNaN(id_producto)) {
    //     return res.status(400).json({
    //         error: "Se requiere un ID para actualizar un producto"
    //     });
    // }

    if (!nombre || !descripcion || !precio || !stock || !img || !categoria) {
        return res.status(400).json({
            error: "Faltan campos requeridos (nombre, descripcion, precio, stock, img, categoria)"
        });
    }

    try {
        // let sql = `UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ?, img = ?, categoria = ? WHERE id_producto = ?`;
        // let [result] = await connection.query(sql, [nombre, descripcion, precio, stock, img, categoria, id_producto]);

        let [result] = await Productos.updateProducto(id, nombre, descripcion, precio, stock, img, categoria);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: `No se encontro un producto con ID: ${id}`
            });
        }

        return res.status(200).json({
            message: `Producto con ID: ${id} se actualizo correctamente`
        });

    } catch (error) {
        res.status(500).json({
            message: `Error al intentar actualizar el producto`,
            payload: error.message
        });
    }
}

export const actualizarEstadoProducto = async (req, res) => {

    try {
        let { id_producto, id_estado } = req.params;

        let idProducto = parseInt(id_producto);
        let idEstado = parseInt(id_estado);

        if (isNaN(idProducto) || isNaN(idEstado)) {
            return res.status(400).json({
                message: "Los parametros invalidos, id_producto y id_estado deben ser numericos"
            });
        }
        let fecha_de_modificacion = new Date();

        // let sql = `UPDATE productos SET id_estado = ?, fecha_de_modificacion = ? WHERE id_producto = ?`;
        // let [result] = await connection.query(sql, [idEstado, fecha_de_modificacion, idProducto]);

        const [result] = await Productos.updateProductoEstado(idProducto, fecha_de_modificacion, idEstado);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: `No se encontro un producto con ID: ${idProducto}`
            });
        }

        res.status(200).json({
            message: `Producto con ID: ${idProducto} se actualizo el estado correctamente`
        });

    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el producto",
            payload: error.message
        });
    }
}

export const eliminarProducto = async (req, res) => {
    try {
        let { id_producto } = req.params;

        if (!id_producto) {
            return res.status(400).json({
                message: "Se requiere un ID para eliminar un producto"
            });
        }
        // let sql = `DELETE FROM productos WHERE id_producto = ? `
        // let [result] = await connection.query(sql, [id_producto]);

        const [result] = await Productos.deleteProducto(id_producto);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: `No se encontro un producto con el ID: ${id_producto}`
            });
        }

        res.status(200).json({
            message: `Prodcuto con ID: ${id_producto} se elimino correctamente`
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar un producto",
            payload: error.message
        })
    }
} 
