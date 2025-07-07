// importaciones
import Productos from "../models/productos.models.js";
import Ventas from "../models/ventas.models.js";

export const vistaVentas = async (req, res) => {
    try {
        const resultVentas = await Ventas.selectAllVentas();
        res.render("ventas", {
            title: "Ventas",
            about: "Vista de ventas del sistema",
            ventas: resultVentas[0] // Pasar las ventas a la vista
        });
    } catch (error) {
        error("Error al renderizar la vista de ventas: ", error);
        res.status(500).json({
            error: "Error al renderizar la vista de ventas"
        });
    }
}

export const vistaLogin = async (req, res) => {
    try {
        const resultVentas = await Ventas.selectAllVentas();
        console.log("Ventas obtenidas: ", resultVentas[0]);
        res.render("login", {
            title: "Login",
            about: "Iniciar sesión para acceder al sistema",
            ventas: resultVentas[0] // Pasar las ventas a la vista
        })
    } catch (error) {
        console.error("Error al renderizar la vista de login: ", error);
        res.status(500).json({
            error: "Error al renderizar la vista de login"
        });
    }
}

// controlador para la vista de productos ordenados
export const vistaFront = async (req, res) => {
    try {
        const resultProductos = await Productos.selectAllProducts();
        res.render("front", {
            title: "Listado de productos",
            productos: resultProductos[0],
        });
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.status(500).json({
            error: "Error al obtener los productos"
        });
    }
}

// controladores para las vistas de consultar
export const vistaConsulta = (req, res) => {
    res.render("consultar", {
        title: "Consulta de productos",
        about: "Consultar productos por ID",
    });
}

// controladores para las vistas de crear
export const vistaCrear = (req, res) => {
    res.render("crear", {
        title: "Crear producto",
    });
}

// controladores para las vistas de modificar
export const vistaModificar = (req, res) => {
    res.render("modificar", {
        title: "Modificar producto",
        about: "Buscar por ID, luego modificar los campos que desee",
    });
}

// controladores para las vistas de eliminar

export const vistaEliminar = (req, res) => {
    res.render("eliminar", {
        title: "Eliminar producto",
        about: "Buscar por ID, luego eliminar el producto",
    });
}

export const vistaModificarEstado = (req, res) => {
    res.render("modificar-estado", {
        title: "Modificar estado del producto",
        about: "Buscar por ID, luego modificar el estado del producto",
    });
}