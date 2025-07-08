// middewares para mostrar la url
const loggerUrl = ((req, res, next) => {
    console.log(`Fecha: ${new Date().toLocaleString()} - Method: ${req.method} - URL: ${req.url}`);
    next();
});

// middewares para validar el id
const validateId = (req, res, next) => {
    const { id } = req.params;


    if (!id || isNaN(id)) {
        return res.status(400).json({
            error: "El id debe ser un numero"
        });
    }
    req.id = parseInt(id, 10);
    next();
}

export const isAdmin = (req, res, next) => {
    if (req.session?.user?.rol === "administrador" || req.session?.user?.id_rol === 1) {
        return next();  // Permite el acceso si el usuario es admin
    }

    return res.status(403).json({
        message: "Acceso denegado. No sos administrador"
    });
}

// Exportamos los middlewares
export {
    loggerUrl,
    validateId
}