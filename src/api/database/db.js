// Importaciones
import mysql from "mysql2/promise";
import enviroments from "../config/enviroments.js";

// Desestructuramos la configuración de la base de datos
const { database } = enviroments;

// Creamos la conexión a la base de datos usando un pool de conexiones
const connection = mysql.createPool({
    host: database.host,
    database: database.name,
    user: database.user,
    password: database.password
});

// Exportamos la conexión para que pueda ser utilizada en otros módulos
export default connection;