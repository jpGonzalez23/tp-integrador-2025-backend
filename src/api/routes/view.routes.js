// Importaciones
import { Router } from "express";
import { 
    vistaConsulta, 
    vistaCrear, 
    vistaEliminar, 
    vistaFront, 
    // vistaIndex, 
    vistaModificar 
} from "../controllers/view.controllers.js";

const router = Router();


// router.get("/ ", vistaIndex);

// Rutas para manejar las vistas
router.get("/", vistaFront); // Vista principal con productos

router.get("/consultar", vistaConsulta); // Vista para consultar productos por ID

router.get("/crear", vistaCrear); // Vista para crear un nuevo producto

router.get("/modificar", vistaModificar); // Vista para modificar un producto existente

router.get("/eliminar", vistaEliminar); // Vista para eliminar un producto

export default router;