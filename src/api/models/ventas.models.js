import connection from "../database/db.js";

// promise para seleccionar todas las ventas
const selectAllVentas = async () => {
    let sql = `SELECT * FROM ventas`;
    return await connection.query(sql);
}

export default {
    selectAllVentas
};