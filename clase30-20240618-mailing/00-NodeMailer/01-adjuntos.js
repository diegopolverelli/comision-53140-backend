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
        subject: "prueba de email con adjuntos",
        // text:"mensaje en formato texto plano",
        html:`<h2>Mensaje de prueba (con adjuntos)</h2><br><br>
<b><i>Prueba...!!!</i></b>`,
        attachments: [
            {
                path:"./images/diego10.jpg",
                filename:"diego10.jpg"
            },
            {
                path:"./images/lio.jpg",
                filename:"messi01.jpg"
            },
            {
                path:"./images/lio2.jpg",
                filename:"messi02.jpg"
            },
        ]
    }
).then(resultado=>console.log(resultado))
 .catch(error=>console.log(error))