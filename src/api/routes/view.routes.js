import { Router } from "express";
import { 
    vistaConsulta, 
    vistaCrear, 
    vistaEliminar, 
    vistaIndex, 
    vistaModificar 
} from "../controllers/view.controllers.js";

const router = Router();

router.get("/", vistaIndex);

router.get("/consulta", vistaConsulta);

router.get("/crear", vistaCrear);

router.get("/modificar", vistaModificar);

router.get("/eliminar", vistaEliminar);

export default router