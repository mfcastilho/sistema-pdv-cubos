import express from "express";
import { userRoutes, categoryRoutes, productRoutes, clientRoutes } from "./routes/index";
import { config } from "dotenv";
config();

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(categoryRoutes);
app.use(productRoutes);
app.use(clientRoutes);


export default app;