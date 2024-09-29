import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readFile } from '../utils/readFile.js';
import { writeFile } from '../utils/writeFile.js';

export const generateProducts = async (number) => {
  const products = await readFile();

  for (let i = 0; i < number; i++) {
    products.push(createFakeProduct());
  }
  writeFile(products);
};

generateProducts(5).catch(console.log);
