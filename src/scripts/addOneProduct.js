import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

const addOneProduct = async () => {
  try {
    const date = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(date);
    const newProduct = createFakeProduct();
    products.push(newProduct);
    const productsJSON = JSON.stringify(products, undefined, 2);
    fs.writeFile(PATH_DB, productsJSON, 'utf-8');
  } catch (error) {
    console.log(error);
  }
};

addOneProduct();
