const express = require("express");
const listRouter = require("./src/routers/list-routes");
// const productRouter = require("./src/routers/product-routes");
require("./src/db/mongoose");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(listRouter);
// app.use(productRouter);

module.exports = app;
