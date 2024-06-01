import bcrypt from "bcrypt"
import passport from "passport";
export const SECRET = "CoderCoder123"

export const validaPass = (pass, hash) => bcrypt.compareSync(pass, hash)

export const passportCall = (estrategia, permisos=[]) => function (req, res, next) {
  if(Array.isArray(permisos)){
    permisos=permisos.map(p=>p.toLowerCase())
    if(permisos.includes("public")){
      return next()
    }
  }
  passport.authenticate(estrategia, function (err, user, info, status) {
    if (err) { return next(err) }
    if (!user) {
      res.setHeader('Content-Type', 'application/json');
      return res.status(400).json({ error: info.message ? info.message : info.toString() })
    }
    req.user = user
    return next()
  })(req, res, next);
}