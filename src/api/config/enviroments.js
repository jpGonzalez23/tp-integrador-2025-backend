import dotenv from "dotenv";

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

export default {
    port: process.env.PORT || 3000,
    database: {
        host: process.env.BD_HOST,
        name: process.env.BD_NAME,
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD
    }
}