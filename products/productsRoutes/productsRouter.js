const express = require("express");
const router = express.Router();
const {
  getAllPrudacts,
  getUser,
  update,
  append,
  deleteProduct,
  editQuantity,
} = require("../ProductsController/userController");

router.get("/all", getAllPrudacts);
router.get("/product/:id", getUser);
router.post("/update/:id", update);
router.post("/add", append);
router.delete("/delete/:id", deleteProduct);
router.get("/plus/:id", editQuantity);
router.get("/minus/:id", editQuantity);

module.exports = router;
