import { fileURLToPath } from 'url';
import { dirname } from 'path';
import crypto from "crypto"
import multer from "multer"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

const SECRET = "CoderCoder123"
export const generaHash = password => crypto.createHmac("sha256", SECRET).update(password).digest("hex")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

export const upload = multer({ storage: storage })