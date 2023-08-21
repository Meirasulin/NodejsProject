const { error, trace } = require("console");
const {
  allProducts: allprudacts,
  getUserById,
  updateById,
  appendNewPro,
  deletePro,
  addOrSubtractQuantity,
} = require("../serviceProducts/prudactService");

const getAllPrudacts = (req, res) => {
  try {
    const pru = allprudacts();
    if (!pru) throw new Error("Page not found");
    res.send(pru);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const getUser = (req, res) => {
  try {
    const prudId = parseInt(req.params.id);
    const product = getUserById(prudId);
    if (!product) throw new Error("Product not found");
    res.send(product);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

const update = (req, res) => {
  try {
    const body = req.body;
    const prudId = parseInt(req.params.id);
    const product = updateById(prudId, body);
    if (!product) throw new Error("Product not found");
    res.send(product);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

const append = (req, res) => {
  const newProduct = req.body;
  try {
    const app = appendNewPro(newProduct);
    if (app === false)
      throw new Error(
        "Another product exists with the same id. Please change id for the new product,"
      );
    res.send("pruduct added successfully");
  } catch (error) {
    res.status(401).send(error.message);
  }
};

const deleteProduct = (req, res) => {
  const proId = parseInt(req.params.id);
  try {
    const result = deletePro(proId);
    if (result === false) throw new Error("not found product to delete.");
    res.send("product deleted");
  } catch (error) {
    res.status(401).send(error.message);
  }
};
const editQuantity = (req, res) => {
  const proId = parseInt(req.params.id);
  const plusOrMinus = req.path;
  let result;
  try {
    if (plusOrMinus.includes("/plus/")) {
      result = addOrSubtractQuantity(proId, (p) => p + 1);
    } else if (plusOrMinus.includes("/minus/")) {
      result = addOrSubtractQuantity(proId, (p) => p - 1);
    }
    if (result === "noProduct") throw new Error("not found product!");
    if (result === "zeroQuantity")
      throw new Error("Quantity cannot be less than zero!");
    res.send("Quantity update!");
  } catch (error) {
    res.status(401).send(error.message);
  }
};
module.exports = {
  getAllPrudacts,
  getUser,
  update,
  append,
  deleteProduct,
  editQuantity,
};
