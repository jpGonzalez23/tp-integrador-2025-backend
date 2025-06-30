# TP Integrador 2025 – Backend

Un **API REST** construido en **Node.js** y **Express**, desarrollado como Trabajo Práctico Integrador de 2025. Permite gestionar recursos a través de endpoints HTTP.

---

## 🔧 Tecnologías usadas

- **Node.js** (versión X.X.X)  
- **Express** (versión X.X.X)  
- 📦 **npm** para administración de paquetes  
- (Opcional) **dotenv** para configuración de entorno  
- (Opcional) **Nodemon** para recarga en desarrollo  

---

## 🚀 Instalación y puesta en marcha

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/jpGonzalez23/tp-integrador-2025-backend.git

2. Entrá al directorio:
    ```bash
    cd tp-integrador-2025-backend
    ```
3. Instalá dependencias:
    ```bash
    npm install
    ```
4. Iniciá el servidor
    ```
    npm run dev
    ```
* El servidor arranca por defecto en http://localhost:3000 (salvo que se especifique otro puerto en .env).


### Estructura del proyecto

tp-integrador-2025-backend/
├── node_modules/          # Dependencias instaladas
├── src/
│   └── api/              # Rutas y controladores
├── .gitignore            # Archivos ignorados por git
├── index.js              # Archivo principal (configuración server)
├── package.json          # Scripts y dependencias
└── package-lock.json     # Versión exacta de dependencias


#Configuracion del entorno
1. Crear un archivo `.env` en la raíz:
    ```bash
    PORT=3000
    DB_URI=mongodb://localhost:27017/mi_basedatos
    ```
2. Instalá `donet` (`npm install dotenv`) y requerilo en index.js:

    ```bash
    require('dotenv').config();
    const port = process.env.PORT || 3000;
    ```

### Scripts disponibles
* `npm run dev` - Inicia el servidor con recarga automática (Nodemon).
* `npm stary` - Ejecuta el servidor en modo producción.


#### Autor
* jpGonzalez - [GitHud](https://github.com/jpGonzalez23)