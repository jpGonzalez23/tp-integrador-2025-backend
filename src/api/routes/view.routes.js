import { Router } from "express";
import { 
    vistaConsulta, 
    vistaCrear, 
    vistaEliminar, 
    vistaFront, 
    vistaIndex, 
    vistaModificar 
} from "../controllers/view.controllers.js";

const router = Router();

router.get("/", vistaFront);
// router.get("/", vistaIndex);

router.get("/consultar", vistaConsulta);

router.get("/crear", vistaCrear);

router.get("/modificar", vistaModificar);

router.get("/eliminar", vistaEliminar);

export default router;