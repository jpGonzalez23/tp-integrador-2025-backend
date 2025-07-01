import { Router } from "express";
import {
    crearProducto,
    getProductos,
    getProductosPorId,
    actualizarProducto,
    actualizarEstadoProducto,
    eliminarProducto
} from "../controllers/producto.controller.js";
import { validateId } from "../middlewares/middlewares.js";

const router = Router();

router.get('/', getProductos);
router.get('/:id', validateId, getProductosPorId);
router.post('/', crearProducto);
router.put('/:id', validateId, actualizarProducto);
router.put('/:id/:id_estado', validateId, actualizarEstadoProducto);
router.delete('/:id', validateId, eliminarProducto);


export default router;