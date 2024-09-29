
import { readFile } from '../utils/readFile.js';

const getAllProducts = async () => {
  try {
    const products = await readFile();
    return products;
  } catch (error) {
    console.log(error);
  }
};
console.log(await getAllProducts());
