// Importaciones
import Productos from "../models/productos.models.js";

// Get - Obtener todos los productos
export const getAllProduct = async (req, res) => {
    try {
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

// Get - Obtener un producto por ID
export const getProductFromId = async (req, res) => {
    try {
        let { id } = req.params;

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

// Post - Crear un producto
export const createProduct = async (req, res) => {
    try {
        let { nombre, descripcion, precio, stock, img, categoria } = req.body;
        let fecha_de_alta = new Date();
        let id_estado = 1;

        if (!nombre || !descripcion || !precio || !stock || !img || !categoria) {
            return res.status(400).json({
                error: "Faltan campos requeridos (nombre, descripcion, precio, stock, img, categoria)"
            });
        }

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

// Put - Actualizar un producto
export const updateProduct = async (req, res) => {
    try {
        let { id, nombre, descripcion, precio, stock, img, categoria } = req.body;

        if (!id || !nombre || !descripcion || !precio || !stock || !img || !categoria) {
            return res.status(400).json({
                error: "Faltan campos requeridos (nombre, descripcion, precio, stock, img, categoria)"
            });
        }
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

// Put - Actualizar el estado de un producto
export const updateStateProduct = async (req, res) => {

    try {
        let { id, id_estado } = req.body;

        let idProducto = parseInt(id);
        let idEstado = parseInt(id_estado);

        if (isNaN(idProducto) || isNaN(idEstado)) {
            return res.status(400).json({
                message: "Los parametros invalidos, id_producto y id_estado deben ser numericos"
            });
        }
        
        let fecha_de_modificacion = new Date();

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

// Delete - Eliminar un producto
export const removeProduct = async (req, res) => {
    try {
        let { id } = req.params;
        const [result] = await Productos.deleteProducto(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: `No se encontro un producto con el ID: ${id}`
            });
        }

        res.status(200).json({
            message: `Prodcuto con ID: ${id} se elimino correctamente`
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar un producto",
            payload: error.message
        })
    }
} 
