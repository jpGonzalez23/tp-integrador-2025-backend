import { Router } from "express";
import { 
    crearProducto, 
    getProductos,
    getProductosPorId, 
    actualizarProducto, 
    actualizarEstadoProducto, 
    eliminarProducto
} from "../controllers/producto.controller.js";

const router = Router();

router.get('/', getProductos);
router.get('/:id_producto', getProductosPorId);
router.post('/', crearProducto);
router.put('/:id_producto', actualizarProducto);
router.put('/:id_producto/:id_estado', actualizarEstadoProducto);
router.delete('/:id_producto', eliminarProducto);


export default router;