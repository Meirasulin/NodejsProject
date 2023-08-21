const express = require("express");
const router = express.Router();
const productsRouters = require("../products/productsRoutes/productsRouter");

router.use("/products", productsRouters);

module.exports = router;
