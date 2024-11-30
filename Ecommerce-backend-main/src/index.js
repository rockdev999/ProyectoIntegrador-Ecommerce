import express from "express";
import { conexion } from "./db.js";
import { userRouter } from "./routes/user.routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(userRouter);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(process.env.DB_PORT, () => {
  console.log(`Servidor en puerto ${process.env.DB_PORT}`);
});
