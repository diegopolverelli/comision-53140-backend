import {fileURLToPath} from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// console.log("import.meta.url:", import.meta.url)
// console.log("fileURLToPath(import.meta.url):",fileURLToPath(import.meta.url))
// console.log("dirname(__filename):",dirname(__filename))

export default __dirname;