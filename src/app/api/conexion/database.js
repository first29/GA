import mysql from "mysql2/promise"
export const cnn = mysql.createPool({
    maxIdle: 100,
    host: '10.70.131.130',
    port: 3306,
    user: 'R',
    password: '5612633',
    database: 'inventario',
    idleTimeout: Infinity,
    queueLimit: 0,
});
