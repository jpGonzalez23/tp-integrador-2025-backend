// Importaciones
import { Router } from "express";
import {
    vistaConsulta,
    vistaCrear,
    vistaEliminar,
    vistaFront,
    vistaLogin,
    vistaModificar,
    vistaModificarEstado,
    vistaVentas
} from "../controllers/view.controller.js";

import { isAdmin } from "../middlewares/middlewares.js";

const router = Router();


// router.get("/ ", vistaIndex);

router.get("/login", vistaLogin); // Vista de login

router.get("/", vistaFront); // Vista principal con productos

router.get("/consultar", vistaConsulta); // Vista para consultar productos por ID

router.get("/crear", vistaCrear); // Vista para crear un nuevo producto

router.get("/modificar", vistaModificar); // Vista para modificar un producto existente

router.get("/modificar-estado", vistaModificarEstado); // Vista para modificar el estado de un producto

router.get("/eliminar", vistaEliminar); // Vista para eliminar un producto

router.get("/ventas", vistaVentas); // Vista para ver las ventas

export default router;