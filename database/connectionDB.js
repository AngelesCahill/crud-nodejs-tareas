import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;


export const pool = new Pool({
    //para que cierre las conexiones automáticamente
    allowExitOnIdle: true, 
});

try {
    await pool.query("SELECT NOW()");
    console.log("Database connected");
} catch (error) {
    console.log(error)
}




