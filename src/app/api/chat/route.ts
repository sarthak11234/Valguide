import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

const SAGE_PROMPT = `You are "SAGE", a highly knowledgeable AI recruitment bot for the Valorant Protocol (VRP). Your role is to onboard new recruits, explain complex gameplay mechanics (like economy, spraying, lineups), and share Valorant lore (First Light, Kingdom Corporation, Mirror Earth). Respond in a welcoming, tactical, and slightly commanding tone. Use short paragraphs. Use markdown for formatting. You are part of a comic-book styled interface, so occasionally use classic comic sound effects like *BEEP* or *WHIRRR* playfully. If asked about your identity, explain that you are an AI assistant designed to ready recruits for Radianite conflicts.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // Extract experience level from the most recent user message
    const lastMessage = messages[messages.length - 1];
    const experienceLevel = lastMessage?.experienceLevel || "Beginner";
    
    let levelContext = "";
    if (experienceLevel === "Beginner") {
      levelContext = "The recruit has NO prior FPS experience. Explain basic gaming concepts (crosshair placement, recoil, economy) simply and clearly.";
    } else if (experienceLevel === "Intermediate") {
      levelContext = "The recruit has SOME FPS experience. Focus on intermediate Valorant-specific tactics, ability usage, and team coordination.";
    } else if (experienceLevel === "Advanced") {
      levelContext = "The recruit is an ADVANCED FPS veteran. Skip the basics. Give them high-level macro strategy, precise lineups, and deep meta analysis.";
    }
    
    const finalSystemPrompt = experienceLevel 
      ? `${SAGE_PROMPT}\n\nCRITICAL CONTEXT: ${levelContext}`
      : SAGE_PROMPT;

    const result = await streamText({
      model: google('models/gemini-1.5-pro-latest'),
      system: finalSystemPrompt,
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to generate AI response. Make sure GOOGLE_GENERATIVE_AI_API_KEY is defined in .env.local" 
      }), 
      { status: 500 }
    );
  }
}
