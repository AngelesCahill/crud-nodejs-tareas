import { tareaModel } from "../models/tarea.model.js";

const getAll = async (_, res) => {
    try {
        const response = await tareaModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const createTarea = async (req, res) => {
    try {
        const { title } = req.body;
        const response = await tareaModel.createTarea(title);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const tareaController = {
  getAll,
  createTarea,
};