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
        subject: "prueba de email con adjuntos incrustados",
        // text:"mensaje en formato texto plano",
        html:`<h2 style="color: red;">Mensaje de prueba (con adjuntos incrustados)</h2><br><br>
<b><i>Prueba...!!!</i></b><br>
<img src="img01"/><br>
<img src="img02"/><br>

<img src="img03"/><br>
`,
        attachments: [
            {
                path:"./images/diego10.jpg",
                filename:"diego10.jpg",
                cid: "img01"
            },
            {
                path:"./images/lio.jpg",
                filename:"messi01.jpg", 
                cid:"img02"
            },
            {
                path:"./images/lio2.jpg",
                filename:"messi02.jpg",
                cid: "img03"
            },
        ]
    }
).then(resultado=>console.log(resultado))
 .catch(error=>console.log(error))




// export const enviarEmail=async(para, asunto, mensaje, adjuntos)=>{
//     return await transporter.sendMail(
//         {
//             to: para, 
//             subject: asunto, 
//             html: mensaje, 
//             attachments: adjuntos
//         }
//     )
// }

// let resultado=await enviarEmail("diegopolverelli@hotmail.com", "prueba II", "hola...!!!")
// if(resultado.accepted.length>0){
//     console.log("Mail enviado...!!!")
// }