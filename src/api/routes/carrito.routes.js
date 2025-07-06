// Importanciones
import { Router } from "express";
import { 
    agregarProductoACarrito, 
    cerrarCarrito, 
    crearCarrito, 
    obtenerCarrito 
} from "../controllers/carrito.controllers.js";

const router = Router(); // Rutas para manejar el carrito de compras

router.post("/", crearCarrito); // Crear un nuevo carrito
router.post("/producto", agregarProductoACarrito); // Agregar un producto al carrito
router.get("/:id_usuario", obtenerCarrito);  // Obtener el carrito de un usuario
router.put("/cerrar/:id_carrito", cerrarCarrito);  // Cerrar el carrito (cambiar estado a cerrado)

// Exportar el router
export default router;