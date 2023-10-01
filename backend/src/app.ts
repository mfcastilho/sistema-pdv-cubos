import express from "express";
import { categoryRoutes } from "./routes/index";
import { config } from "dotenv";
config();

const app = express();

app.use(express.json());


app.use(categoryRoutes);


export default app;