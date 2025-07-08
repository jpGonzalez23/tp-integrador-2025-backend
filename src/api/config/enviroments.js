// Importaciones
import dotenv from "dotenv";

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

// Exportamos la configuración del entorno
// Si no se define el puerto en las variables de entorno, se usa el 3000
export default {
    port: process.env.PORT || 3000,
    database: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
}