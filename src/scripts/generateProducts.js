import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

export const generateProducts = async (number) => {
  const date = await fs.readFile(PATH_DB, 'utf-8');
  const products = JSON.parse(date);

  for (let i = 0; i < number; i++) {
    products.push(createFakeProduct());
  }
  fs.writeFile(PATH_DB, JSON.stringify(products, undefined, 2));
};

generateProducts(5).catch(console.log);
