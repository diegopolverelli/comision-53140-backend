import multer from "multer"
import nodemailer from "nodemailer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({ storage: storage })


const transporter=nodemailer.createTransport(
    {
        service:"gmail", 
        port:"587",
        auth:{
            user:"diegopolverelli@gmail.com",
            pass: "abqlowdetiykvnjb"
        }
    }
)

export const enviarMail=async(to, subject, message, attachments)=>{
    return await transporter.sendMail(
        {
            from: "Comis 53140 diegopolverelli@gmail.com",
            to,
            subject,
            // text:"mensaje en formato texto plano",
            html:message,
            attachments
        }
    ) 
}
