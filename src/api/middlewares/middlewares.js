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

// Exportamos los middlewares
export {
    loggerUrl,
    validateId
}