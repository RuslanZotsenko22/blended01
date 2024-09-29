
import { writeFile } from '../utils/writeFile.js';

const clearProducts = async () => {
  await writeFile([]);
};

clearProducts();