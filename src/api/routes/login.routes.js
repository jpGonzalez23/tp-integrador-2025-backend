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
router.get('/', getAllUser); // Obtener todos los usuarios
router.get('/:id_usuario', validateId, getUserFromId); // Obtener un usuario por ID
router.post('/', createProduct); // Crear un nuevo usuario
router.put('/:id_usuario', validateId, updateUser); // Actualizar un usuario
router.put('/:id_usuario/:id_estado', validateId, updateStateUser); // Actualizar el estado de un usuario
router.delete('/:id_usuario', validateId, removeUser); // Eliminar un usuario

export default router;