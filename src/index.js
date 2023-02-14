import express from "express";
import routes from "./routes/route.js";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors({ origin: "http://localhost:4200" }));

routes(app);

app.get("/", (req, res) => {
  return res.json({ message: "Página inicial" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
