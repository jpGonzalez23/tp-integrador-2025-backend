// importaciones de utilidades para manejar rutas y directorios
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Obtener el nombre del archivo actual y el directorio
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(dirname(__filename), "../../../");

// Exportar las variables y funciones necesarias
export {
    __dirname,
    join
}