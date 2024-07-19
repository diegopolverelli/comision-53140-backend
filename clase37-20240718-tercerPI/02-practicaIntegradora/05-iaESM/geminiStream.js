import dotenv from "dotenv"
import {GoogleGenerativeAI} from "@google/generative-ai"

dotenv.config({path:"./.env", override:true})

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const run=async(prompt)=>{
    try {
        const result = await model.generateContentStream([prompt]);
        // print text as it comes in
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            console.log(chunkText);
        }
    } catch (error) {
        console.log("Error al procesar la consulta... ", error.message)        
    }
    
}

const prompt = "Comparar Batman con Ironman. Respuesta en español";
run(prompt)