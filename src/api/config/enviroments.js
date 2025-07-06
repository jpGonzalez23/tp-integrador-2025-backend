// Importaciones
import dotenv from "dotenv";

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

// Exportamos la configuración del entorno
// Si no se define el puerto en las variables de entorno, se usa el 3000
export default {
    port: process.env.PORT || 3000,
    database: {
        host: process.env.BD_HOST,
        name: process.env.BD_NAME,
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD
    }
}