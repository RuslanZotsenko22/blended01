
import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readFile } from '../utils/readFile.js';
import { writeFile } from '../utils/writeFile.js';


const addOneProduct = async () => {
  try {
    const products = await readFile();
    const newProduct = createFakeProduct();
    products.push(newProduct);
   
    writeFile(products);
  } catch (error) {
    console.log(error);
  }
};

addOneProduct();
