import express from "express";
import { userRoutes, loginRoutes, categoryRoutes, productRoutes, clientRoutes } from "./routes/index";
import { config } from "dotenv";
config();

const app = express();

app.use(express.json());

app.use("/usuario", userRoutes);
app.use("/login", loginRoutes);
app.use("/categoria", categoryRoutes);
app.use("/produto", productRoutes);
app.use("/cliente", clientRoutes);


export default app;