import express from "express";
import "dotenv/config";
import tareaRoute from "./routes/tareaRoute.js";
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/tareas", tareaRoute);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

