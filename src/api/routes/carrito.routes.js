import { Router } from "express";

import { 
    agregarProductoACarrito, 
    cerrarCarrito, 
    crearCarrito, 
    obtenerCarrito 
} from "../controllers/carrito.controllers.js";

const router = Router();

router.post("/", crearCarrito);
router.post("/producto", agregarProductoACarrito);
router.get("/:id_usuario", obtenerCarrito);
router.put("/cerrar/:id_carrito", cerrarCarrito);

export default router;