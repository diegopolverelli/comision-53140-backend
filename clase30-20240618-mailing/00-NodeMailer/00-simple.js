import nodemailer from "nodemailer"

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

transporter.sendMail(
    {
        from: "Comis 53140 diegopolverelli@gmail.com",
        to: "diegopolverelli@hotmail.com",
        subject: "prueba de email simple",
        // text:"mensaje en formato texto plano",
        html:`<h2>Mensaje de prueba</h2><br><br>
<b><i>Prueba...!!!</i></b>`
    }
).then(resultado=>console.log(resultado))
 .catch(error=>console.log(error))