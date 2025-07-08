import User from "../models/usuario.models.js";

export const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error: "Faltan campos obligatorios"
            });
        }

        const [result] = await User.findUserByEmail(email);

        if (result.length === 0) {
            return res.status(404).json({
                error: "Usuario no encontrado"
            });
        }

        const user = result[0];

        if (user.password !== password) {
            return res.status(401).json({
                error: "Contraseña incorrecta"
            });
        }

        // req.session.user = {
        //     id: user.id_usuario,
        //     email: user.email,
        //     id_rol: user.id_rol
        // }


        res.status(200).json({
            message: "Usuario autenticado correctamente",
            payload: {
                id: user.id_usuario,
                email: user.email,
                id_rol: user.id_rol === 1 ? "administrador" : "cliente"
            }
        });
        // return res.redirect("/dashboard");


    } catch (error) {
        res.status(500).json({
            message: "Error al interno del servidor",
            payload: error.message
        })
    }
}