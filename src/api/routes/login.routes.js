// Importaciones
import { Router } from "express";
import { 
    getAllUser, 
    getUserFromId, 
    removeUser, 
    updateStateUser, 
    updateUser 
} from "../controllers/login.controllers.js";
import { validateId } from "../middlewares/middlewares.js";
import { createProduct } from "../controllers/producto.controller.js";

const router = Router();

// Rutas para manejar usuarios
router.get('/', getAllUser);
router.get('/:id_usuario', validateId, getUserFromId);
router.post('/', createProduct);
router.put('/:id_usuario', validateId, updateUser);
router.put('/:id_usuario/:id_estado', validateId, updateStateUser);
router.delete('/:id_usuario', validateId, removeUser);

export default router;