
import { readFile } from '../utils/readFile.js';
const countProducts = async () => {
  try {
    const products = await readFile();
    return products.length;
  } catch (error) {
    console.error(error);
  }
};
console.log(await countProducts());
