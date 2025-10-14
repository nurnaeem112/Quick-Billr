import { GoogleGenAI } from "@google/genai";

// FIX: Aligned with Gemini API guidelines.
// The API key is sourced directly from the environment variable `process.env.API_KEY`.
// It is assumed to be pre-configured and valid. Manual checks for the key have been removed.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateDescription = async (prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Generate a professional, one-sentence invoice line item description for the following service or product: "${prompt}". Keep it concise, clear, and under 15 words. For example, if the input is "web design", a good output would be "Custom website design and development services."`,
        });
        
        return response.text.trim();
    } catch (error) {
        console.error("Error generating description with Gemini:", error);
        return "Error generating description. Please try again.";
    }
};
