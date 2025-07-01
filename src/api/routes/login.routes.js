import { Router } from "express";
import {
    crearUsuario,
    getUsuarios,
    getUsuariosPorId,
    actualizarUsuario,
    actualizarEstadoUsuario,
    eliminarUsuario
} from "../controllers/login.controllers.js";
import { validateId } from "../middlewares/middlewares.js";

const router = Router();

router.get('/', getUsuarios);
router.get('/:id_usuario', validateId, getUsuariosPorId);
router.post('/', crearUsuario);
router.put('/:id_usuario', validateId, actualizarUsuario);
router.put('/:id_usuario/:id_estado', validateId, actualizarEstadoUsuario);
router.delete('/:id_usuario', validateId, eliminarUsuario);

export default router;