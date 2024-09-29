
import { readFile } from '../utils/readFile.js';
import { writeFile } from '../utils/writeFile.js';

const removeRandomProduct = async () => {
  const products = await readFile();
  const randomNumber = Math.floor(Math.random() * products.length);
  products.splice(randomNumber, 1);
  writeFile(products);
};

removeRandomProduct();
