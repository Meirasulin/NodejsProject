const fs = require("fs");
const filePath =
  "C:\\Users\\user\\Desktop\\Exe 2 git\\projectNodeJS\\products\\ProductsDB\\prudacts.json";

const getAllPrudacts = () => {
  const rawData = fs.readFileSync(filePath);
  const products = JSON.parse(rawData);
  return products;
};

const updateFile = (newProductsList) => {
  const modifiedData = JSON.stringify(newProductsList);
  fs.writeFileSync(filePath, modifiedData);
};

module.exports = { getAllPrudacts, updateFile };
