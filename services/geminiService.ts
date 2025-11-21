import { GoogleGenAI, Type } from "@google/genai";
import { PortfolioData } from "../types";

export const generatePortfolioContent = async (userInput: string): Promise<PortfolioData> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `
    You are a creative director and copywriter. 
    Generate a quirky, creative, and professional portfolio structure based on the user's description.
    The tone should be slightly eccentric but usable.
    The language of the content must be Japanese.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: userInput,
    config: {
      systemInstruction: systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "A creative name or nickname for the person" },
          title: { type: Type.STRING, description: "A professional yet catchy job title" },
          bio: { type: Type.STRING, description: "A short, engaging biography (max 200 chars)" },
          quirkyQuote: { type: Type.STRING, description: "A random, funny, or philosophical quote representing them" },
          contactEmail: { type: Type.STRING, description: "A fake but realistic email address" },
          projects: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                tags: { type: Type.ARRAY, items: { type: Type.STRING } }
              }
            }
          }
        },
        required: ["name", "title", "bio", "projects", "contactEmail", "quirkyQuote"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from Gemini");

  return JSON.parse(text) as PortfolioData;
};