import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';

const getAllProducts = async () => {
  try {
    const date = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(date);
    return products;
  } catch (error) {
    console.log(error);
  }
};
console.log(await getAllProducts());
