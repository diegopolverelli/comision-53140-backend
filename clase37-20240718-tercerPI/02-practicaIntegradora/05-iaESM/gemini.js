// https://ai.google.dev/gemini-api/docs/api-overview?hl=es-419#node.js
// https://ai.google.dev/gemini-api/docs/get-started/tutorial?lang=node&hl=es-419

// const dotenv = require("dotenv")
import dotenv from "dotenv"
// const { GoogleGenerativeAI } = require("@google/generative-ai");
import {GoogleGenerativeAI} from "@google/generative-ai"

dotenv.config({ path: "./.env", override: true })


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run(prompt) {
    // const prompt = "Write a story about a AI and magic"

    try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        console.log(text);
    } catch (error) {
        console.log("Error al procesar la consulta... ", error.message)        
    }
}

run("¿Cual es la distancia entre la luna y la tierra? por favor generar respuesta en español");