import express from "express";
import cors from "cors";
import enviroments from "./api/config/enviroments.js";
import connection from "./src/api/database/db.js"

const app = express();
const PORT = enviroments.port;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});