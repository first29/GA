import mysql from "mysql2/promise"
export const cnn = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456Canvia',
    database: 'inventario',
    idleTimeout: Infinity,
    queueLimit: 0,
    connectionLimit: 10000,
});
