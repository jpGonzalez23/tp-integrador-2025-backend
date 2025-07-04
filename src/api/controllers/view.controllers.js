import Productos from "../models/productos.models.js";

export const vistaIndex = async (req, res) =>{
    try {
        const resultProductos = await Productos.selectAllProducts();
        res.render("index", {
            title: "Liestado de productos",
            productos: resultProductos[0]
        });
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.status(500).json({
            error: "Error al obtener los productos"
        });        
    }
}

export const vistaConsulta = (req, res) => {
    res.render("consulta", {
        title: "Consulta de productos",
        about: "Consultar productos por ID",
    });
}

export const vistaCrear = (req, res) => {
    res.render("crear", {
        title: "Crear producto",
    });
}

export const vistaModificar = (req, res) => {
    res.render("modificar", {
        title: "Modificar producto",
        about: "Buscar por ID, luego modificar los campos que desee",
    });
}

export const vistaEliminar = (req, res) => {
    res.render("eliminar", {
        title: "Eliminar producto",
        about: "Buscar por ID, luego eliminar el producto",
    });
}