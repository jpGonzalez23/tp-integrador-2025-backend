// importaciones
import Carrito from '../models/carrito.models.js';

// Post - Crear un producto
export const crearCarrito = async (req, res) => {
    try {
        let { id_usuario } = req.body;
        let fecha_creacion = new Date();

        if(!id_usuario || isNaN(id_usuario)) {
            return res.status(400).json({
                error: "ID del usuario invalido"
            });
        }

        const [result] = await Carrito.crearCarrito(id_usuario, fecha_creacion);

        if(result.affectedRows === 0) {
            return res.status(404).json({
                error: "Error al crear carrito"
            })
        }

        res.status(201).json({
            message: "Carrito creado con exito",
            payload: [result]
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el carrito",
            payload: error.message
        });
    }
}

// Post - Agregar un producto al carrito
export const agregarProductoACarrito = async (req, res) => {
    try {
        let { id_carrito, id_producto, cantidad } = req.body;

        if(!id_carrito || !id_producto || cantidad) {
            return res.status(400).json({
                error: "Faltan campos obligatorios"
            });
        }

        const [result] = await Carrito.agregarProductoACarrito(id_carrito, id_producto, cantidad);

        if(result.affectedRows === 0) {
            return res.status(404).json({
                error: "Error al agregar al carrito"
            })
        }

        res.status(201).json({
            message: "Producto agregado al carrito.",
            payload: result
        });

    } catch (error) {
        res.status(500).json({
            message: "Error al agregar producto al carrito",
            payload: error.message
        });
    }
}

// Get - Obtener el carrito de un usuario
export const obtenerCarrito = async (req, res) => {
    try {
        let { id_usuario } = req.params;

        if(!id_usuario || isNaN(id_usuario)) {
            return res.status(400).json({
                error: "ID del usuario invalido"
            })
        }

        const [result] = await Carrito.obtenerCarritoDeUsuario(id_usuario);

        if(result.affectedRows === 0) {
            return res.status(404).json({
                error: "carrito no obtenido"
            });
        }

        res.status(201).json({
            message: "Carrito obtenido",
            payload: result
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el carrito",
            payload: error.message
        });
    }
}

// Put - Cerrar el carrito
export const cerrarCarrito = async (req, res) => {
    try {
        let { id_carrito } = req.params;

        if(!id_carrito || isNaN(id_carrito)) {
            return res.status(400).json({
                error: "ID de carrito es invalido"
            });
        }

        const [result] = await Carrito.cambiarEstadoCarrito(id_carrito);

        if(result.affectedRows === 0) {
            return res.status(404).json({
                error: "Carrito no encontrado"
            });
        }

        res.status(201).json({
            message: "Carrito cerrado exitosamente"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error al cerrar carrito.",
            payload: error.message
        });
    }
}