const accountSid = 'Sid de twilio - sacar del panel';
const authToken = 'token de twilio - sacar del panel';
import twilio from "twilio"
// const client = require('twilio')(accountSid, authToken);
const client=twilio(accountSid, authToken)

client.messages
    .create({
        body: 'Prueba...!!!',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+5491154200776'
    })
    .then(message => console.log(message.sid))
    // .done();