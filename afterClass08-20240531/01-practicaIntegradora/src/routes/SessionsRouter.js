import jwt from "jsonwebtoken"
import { CustomRouter } from "./CustomRouter.js";
import { SECRET, passportCall } from "../utils.js";

export class SessionsRouter extends CustomRouter{
    init(){
        this.post("/login", ["public"], passportCall("login"), (req, res)=>{

            // req.session.usuario=usuario

            let token=jwt.sign(req.user, SECRET, {expiresIn: "1h"})
            // res.cookie("coderCookie", token, {httpOnly:true})

            res.setHeader('Content-Type','application/json');
            return res.status(200).json({status:"Login exitoso", usuarioLogueado:req.user, token});
        })
    }
}