// Importaciones
import { Router } from "express";
import {
    createProduct,
    getAllProduct,
    getProductFromId,
    removeProduct,
    updateProduct,
    updateStateProduct,
} from "../controllers/producto.controller.js";
import { validateId } from "../middlewares/middlewares.js";

const router = Router();

// Rutas para manejar productos
router.get('/', getAllProduct); // Obtener todos los productos
router.get('/:id', validateId, getProductFromId); // Obtener un producto por ID
router.post('/', createProduct); // Crear un nuevo producto
router.put('/', updateProduct); // Actualizar un producto
router.put('/:id', validateId, updateStateProduct); // Actualizar el estado de un producto
router.delete('/:id', validateId, removeProduct); // Eliminar un producto

export default router;