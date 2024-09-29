import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constans/products.js';

const removeRandomProduct = async () => {
  const date = await fs.readFile(PATH_DB, 'utf-8');
  const products = JSON.parse(date);
  const randomNumber = Math.floor(Math.random() * products.length);
  products.splice(randomNumber, 1);
  fs.writeFile(PATH_DB, JSON.stringify(products, undefined, 2));
};

removeRandomProduct();
