import { Router } from "express";
import { 
    crearUsuario, 
    getUsuarios, 
    getUsuariosPorId, 
    actualizarUsuario, 
    actualizarEstadoUsuario, 
    eliminarUsuario
} from "../controllers/login.controllers.js";

const router = Router();

router.get('/', getUsuarios);
router.get('/:id_usuario', getUsuariosPorId);
router.post('/', crearUsuario);
router.put('/:id_usuario', actualizarUsuario);
router.put('/:id_usuario/:id_estado', actualizarEstadoUsuario);
router.delete('/:id_usuario', eliminarUsuario);

export default router;