import passport from "passport";
import { CustomRouter } from "./CustomRouter.js";

export class SessionsRouter extends CustomRouter{
    init(){
        this.post("/", passport.authenticate)
    }
}