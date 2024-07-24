// https://ai.google.dev/gemini-api/docs/get-started/tutorial?lang=node&hl=es-419
// https://ai.google.dev/gemini-api/docs/api-overview?hl=es-419#node.js
// https://ai.google.dev/gemini-api/docs/models/generative-models?hl=es-419#model-parameters

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for-await...of
// https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/getReader
// https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode

import express from "express"
import dotenv from "dotenv"
import {GoogleGenerativeAI} from "@google/generative-ai"

dotenv.config({path:"./.env", override:true})

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const generationConfig = {
    // stopSequences: ["red"],
    maxOutputTokens: 500,
    temperature: 0.9,
    // topP: 0.1,
    // topK: 16,
  };

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig });

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})


app.get('/gemini', async(req, res) => {
    
    let {prompt}=req.query
    if(!prompt){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un query param "prompt", con su consulta para Gemini IA`})
    }
    
    let result
    try {
        result = await model.generateContentStream([prompt]);
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }
    res.set('Content-Type', 'application/json');
    res.set('Transfer-Encoding', 'chunked');

    try {
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            console.log(chunkText);
            res.write(chunkText);
        }
    
        res.end()
    } catch (error) {
        console.log(error);
        // resuelvo el try/catch, pero para el caso de un stream (ya hemos comenzado a emitir
        // una response...)
        res.write("\n\n");
        res.write(error.message);
        res.end()
    }
});


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
