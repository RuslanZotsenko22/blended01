import { PATH_DB } from '../constans/products.js';
import fs from 'node:fs/promises';

export const  writeFile = async (products) => { 

    

    try {
        const data = JSON.stringify(products, undefined, 2);
         await fs.writeFile(PATH_DB, data, 'utf-8');

        
    } catch (error) {
        console.log("ups...." , error);
        
    }
};