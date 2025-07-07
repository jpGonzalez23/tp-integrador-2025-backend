// Importaciones
import { Router } from "express";
import { createUser, getAllUser, getUserFromId, modifyUser, modifyUserStatus, removeUser } from "../controllers/user.controllers.js";
import { validateId } from "../middlewares/middlewares.js";

const router = Router();

// Rutas para manejar usuarios
router.get('/', getAllUser); // Obtener todos los usuarios
router.get('/:id_usuario', validateId, getUserFromId); // Obtener un usuario por ID
router.post('/', createUser); // Crear un nuevo usuario
router.put('/:id_usuario', validateId, modifyUser); // Actualizar un usuario
router.put('/:id_usuario/:id_estado', validateId, modifyUserStatus); // Actualizar el estado de un usuario
router.delete('/:id_usuario', validateId, removeUser); // Eliminar un usuario

export default router;