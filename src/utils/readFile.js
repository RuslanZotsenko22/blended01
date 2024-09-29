import { PATH_DB } from '../constans/products.js';
import fs from 'node:fs/promises';

export const readFile = async () => {
    

    try {
        const date = await fs.readFile(PATH_DB, 'utf-8');
        const products = JSON.parse(date);
        return products;
        
    } catch (error) {
        console.log('ups..' ,error);
        
    }
};

