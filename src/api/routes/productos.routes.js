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

router.get('/', getAllProduct);
router.get('/:id', validateId, getProductFromId);
router.post('/', createProduct);
router.put('/:id', validateId, updateProduct);
router.put('/:id/:id_estado', validateId, updateStateProduct);
router.delete('/:id', validateId, removeProduct);


export default router;