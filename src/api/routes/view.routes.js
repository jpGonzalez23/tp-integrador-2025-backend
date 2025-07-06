// Importaciones
import { Router } from "express";
import { 
    vistaConsulta, 
    vistaCrear, 
    vistaEliminar, 
    vistaFront, 
    vistaModificar 
} from "../controllers/view.controllers.js";

const router = Router();

// Rutas para manejar las vistas
router.get("/", vistaFront);

router.get("/consultar", vistaConsulta);

router.get("/crear", vistaCrear);

router.get("/modificar", vistaModificar);

router.get("/eliminar", vistaEliminar);

// Exportar el router
export default router;