import { pool } from "../database/connectionDB.js";

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM todos");
    //console.log({ rows });
    return rows;
};

const createTarea = async (title) => {
    const query = "INSERT INTO todos (title) VALUES ($1) RETURNING *";
    const { rows } = await pool.query(query, [title]);
    return rows[0];
}

export const tareaModel = {
  findAll,
  createTarea,
};