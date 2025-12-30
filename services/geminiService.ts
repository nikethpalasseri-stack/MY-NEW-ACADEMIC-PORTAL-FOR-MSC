
import { GoogleGenAI } from "@google/genai";

export const generateStudyNotes = async (courseTitle: string, unitTitle: string, content: string) => {
  try {
    // Initializing GoogleGenAI with the required format using the API key directly from environment variables
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Using gemini-3-pro-preview for complex STEM-related tasks as per guidelines
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `You are an expert Chemistry Professor. Generate comprehensive, exam-oriented study notes for the following MSc Chemistry topic. 
      Course: ${courseTitle}
      Unit: ${unitTitle}
      Key Topics: ${content}
      
      Requirements:
      1. Provide a detailed summary.
      2. Highlight key equations and principles.
      3. Include typical exam questions related to this unit.
      4. Suggest 3 high-quality academic references (books or research articles).
      Format the response in beautiful Markdown.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });

    // Directly access the .text property from the response
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to generate study notes. Please check your connection and try again.";
  }
};
