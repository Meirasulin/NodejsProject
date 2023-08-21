const { error } = require("console");
const { getAllPrudacts, updateFile } = require("../Productsdal/dal");
const pro = getAllPrudacts();

const allProducts = () => {
  const pr = getAllPrudacts();
  return pr;
};

const getUserById = (id) => {
  const product = pro.find((p) => p.id === id);
  return product;
};

const updateById = (id, body) => {
  const productIndex = pro.findIndex((p) => {
    return p.id === id;
  });
  if (productIndex === -1) return false;
  pro[productIndex] = body;
  updateFile(pro);
  return getAllPrudacts();
};
const appendNewPro = (body) => {
  const newProId = body.id;
  const newProductsList = getAllPrudacts();
  const product = pro.find((p) => p.id === newProId);
  if (product) return false;
  newProductsList.push(body);
  updateFile(newProductsList);
};

const deletePro = (idToDelete) => {
  const ifFound = pro.find((p) => p.id === idToDelete);
  if (!ifFound) {
    return false;
  } else {
    const newProductsList = pro.filter((p) => p.id !== idToDelete);
    updateFile(newProductsList);
  }
};

const addOrSubtractQuantity = (idPro, operation) => {
  const productIndex = pro.findIndex((p) => {
    return p.id === idPro;
  });

  if (productIndex === -1) return "noProduct";
  const currentQuantity = pro[productIndex].Quantity;
  const newQuantity = operation(currentQuantity);
  pro[productIndex].Quantity = newQuantity;
  if (pro[productIndex].Quantity < 0) return "zeroQuantity";
  updateFile(pro);
};

module.exports = {
  allProducts,
  getUserById,
  updateById,
  appendNewPro,
  deletePro,
  addOrSubtractQuantity,
};
