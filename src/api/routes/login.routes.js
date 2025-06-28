import { Router } from "express";
import { 
    crearUsuario, 
    getUsuarios, 
    getUsuariosPorId, 
    actualizarUsuario, 
    darDeBajaUsuario 
} from "../controllers/login.controllers.js";

const router = Router();

router.get('/', getUsuarios);
router.get('/:id_usuario', getUsuariosPorId);
router.post('/', crearUsuario);
router.put('/id_usuario', actualizarUsuario);
router.delete('/:id_usaurio/:id_estado', darDeBajaUsuario);

export default router;