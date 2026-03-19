import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`External API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Agents fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch agents data from Valorant-API" }, 
      { status: 500 }
    );
  }
}
