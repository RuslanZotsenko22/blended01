import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';
const countProducts = async () => {
  try {
    const date = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(date);
    return products.length;
  } catch (error) {
    console.error(error);
  }
};
console.log(await countProducts());
