const express = require("express");
const cors = require("cors");

const clienteRoute = require("./src/routes/clienteRoutes");
const avaliacaoRoute = require("./src/routes/avaliacaoRoutes");
const restauranteRoute = require("./src/routes/restauranteRoutes");
const categoriasRoute = require("./src/routes/categoriasRoutes");
const router = require("./src/routes/clienteRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(clienteRoute);
app.use(avaliacaoRoute);
app.use(restauranteRoute);
app.use(categoriasRoute);

app.listen(3000, () => {
    console.log("Rodandooo");
});
