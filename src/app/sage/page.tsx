"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";

export default function SageChatbot() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const text = input;
    setInput("");
    await sendMessage({ role: "user", parts: [{ type: "text", text: text }] });
  };

  return (
    <div className="min-h-screen bg-[#0F1923] text-[#ECE8E1] p-8 font-sans">
      <div className="max-w-3xl mx-auto border-4 border-black p-6 relative bg-[radial-gradient(circle,#39FF14_1px,transparent_1px)] bg-[size:10px_10px]">
        {/* Comic Panel Header */}
        <div className="absolute -top-6 -left-6 bg-[#FF4655] border-4 border-black px-6 py-2 transform -skew-x-12 z-10 shadow-[8px_8px_0px_#00E5FF]">
          <h1 className="text-3xl font-black uppercase tracking-widest text-black italic">
            SAGE Terminal
          </h1>
        </div>

        <div className="h-[600px] bg-[#0F1923] border-4 border-black mt-8 p-6 overflow-y-auto space-y-6">
          {messages.length === 0 && (
            <div className="text-center text-xl text-gray-400 font-bold uppercase tracking-widest mt-20">
              *SYSTEM INITIATED*<br/>What is your FPS experience, recruit?
            </div>
          )}

          {messages.map((m) => {
            const textContent = m.parts
              ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
              .map((p) => p.text)
              .join("") ?? "";

            return (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] border-4 border-black p-4 relative ${
                    m.role === 'user' 
                      ? 'bg-[#ECE8E1] text-black shadow-[4px_4px_0px_#FF4655]' 
                      : 'bg-[#39FF14] text-black shadow-[4px_4px_0px_#0F1923]'
                  }`}
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 95% 100%, 0% 100%)' }}
                >
                  <div className={`absolute bottom-[0px] ${m.role === 'user' ? '-right-3 border-l-4' : '-left-3 border-r-4'} w-0 h-0 border-t-8 border-b-8 border-transparent border-t-black transform translate-y-4`} />
                  
                  <p className="font-bold mb-1 uppercase tracking-wider">{m.role === 'user' ? 'Recruit' : 'SAGE'}</p>
                  <div className="text-lg leading-relaxed whitespace-pre-wrap">{textContent}</div>
                </div>
              </div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex gap-4 relative">
          <input
            className="flex-1 bg-white border-4 border-black px-6 py-4 text-black font-bold text-xl uppercase placeholder-gray-500 shadow-[4px_4px_0px_#ECE8E1] focus:outline-none"
            value={input}
            placeholder="ASK SAGE A QUESTION..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            type="submit" 
            className="bg-[#FF4655] border-4 border-black px-8 py-4 text-white font-black text-2xl uppercase tracking-wider shadow-[4px_4px_0px_#0F1923] hover:translate-y-1 hover:shadow-none transition-all"
          >
            SEND!
          </button>
        </form>
      </div>
    </div>
  );
}
