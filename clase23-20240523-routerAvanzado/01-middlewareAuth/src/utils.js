import {fileURLToPath} from 'url';
import { dirname } from 'path';
import jwt from 'jsonwebtoken'
import passport from 'passport';

export const ROLES={
    admin:"ADMIN",
    user:"USER"
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const SECRET="CoderCoder123"
export default __dirname;


export const passportCall=(estrategia)=>{
    return function (req, res, next) {
        passport.authenticate(estrategia, function (err, user, info, status) {
            if (err) { return next(err) }  // desde passport.config devuelvo return done(error)
            if (!user) { // desde passport.config devuelvo return done(null, false, {message:"valor..."})
                res.setHeader('Content-Type','application/json');
                return res.status(401).json({error:info.message?info.message:info.toString()})
            } 
            req.user=user; // desde passport.config devuelvo return done(null, usuario)
            return next()
        })(req, res, next);
    }
}

