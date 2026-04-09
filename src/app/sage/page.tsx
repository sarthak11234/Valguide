"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useEffect, useRef } from "react";

const SAGE_AVATAR = "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png";

const SUGGESTED_QUESTIONS = [
  "Who should I main as a beginner?",
  "Explain the economy system",
  "What is crosshair placement?",
  "How do I use Sage's abilities?",
  "Best agents for solo queue?",
  "What is the difference between roles?",
];

const TypingIndicator = () => {
  const [text, setText] = useState("*WHIRRR*");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setText(prev => prev === "*WHIRRR*" ? "*BEEP*" : "*WHIRRR*");
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-start items-end mb-4">
      <div className="w-12 h-12 flex-shrink-0 border-4 border-black bg-[#FF4655] shadow-[4px_4px_0px_#0F1923] mr-4 relative overflow-hidden bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-[size:4px_4px]">
        <img loading="lazy" src={SAGE_AVATAR} alt="SAGE" className="w-full h-full object-cover relative z-10" />
      </div>
      <div className="max-w-[80%] border-4 border-black p-4 relative bg-[#39FF14] text-black shadow-[4px_4px_0px_#0F1923]" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 95% 100%, 0% 100%)' }}>
        <div className="absolute bottom-[0px] -left-3 border-r-4 w-0 h-0 border-t-8 border-b-8 border-transparent border-t-black transform translate-y-4" />
        <p className="font-bold mb-1 uppercase tracking-wider">SAGE</p>
        <div className="text-lg leading-relaxed whitespace-pre-wrap font-black italic animate-pulse">{text}</div>
      </div>
    </div>
  );
};

export default function SageChatbot() {
  const [experienceLevel, setExperienceLevel] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, setMessages, status } = useChat();
  
  const [input, setInput] = useState("");

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ 
      parts: [{ type: 'text', text: input }], 
      role: 'user',
      // @ts-ignore - appending custom field due to old SDK limitations
      experienceLevel
    });
    setInput("");
  };

  const handleSuggestion = (question: string) => {
    sendMessage({
      parts: [{ type: 'text', text: question }],
      role: 'user',
      // @ts-ignore 
      experienceLevel
    });
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-[#0F1923] text-[#ECE8E1] p-4 sm:p-8 font-sans">
      <div className="max-w-3xl mx-auto border-4 border-black p-4 sm:p-6 relative bg-[radial-gradient(circle,#39FF14_1px,transparent_1px)] bg-[size:10px_10px] min-h-[750px] flex flex-col">
        {/* Comic Panel Header */}
        <div className="absolute -top-6 -left-2 sm:-left-6 bg-[#FF4655] border-4 border-black px-4 sm:px-6 py-2 transform -skew-x-12 z-10 shadow-[8px_8px_0px_#00E5FF]">
          <h1 className="text-xl sm:text-3xl font-black uppercase tracking-widest text-black italic">
            SAGE Terminal
          </h1>
        </div>

        {!experienceLevel ? (
          /* ONBOARDING FLOW */
          <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 text-center bg-[#0F1923] border-4 border-black mt-8 shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))] z-0 pointer-events-none"></div>
            <div className="relative z-10 w-full max-w-lg">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-widest text-[#00E5FF] mb-2 transform -skew-x-5">
                *SYSTEM INITIATED*
              </h2>
              <p className="text-lg sm:text-xl mb-10 font-bold tracking-wider">WHAT IS YOUR FPS EXPERIENCE, RECRUIT?</p>
              
              <div className="flex flex-col gap-6">
                <button 
                  onClick={() => setExperienceLevel("Beginner")}
                  className="bg-white text-black border-4 border-black p-4 text-lg sm:text-xl font-bold uppercase tracking-wider transform -skew-x-5 hover:bg-[#FF4655] hover:text-white transition-colors shadow-[6px_6px_0px_#00E5FF]"
                >
                  <div className="flex justify-between items-center">
                    <span>BEGINNER</span>
                    <span className="text-sm opacity-70">First time in the field</span>
                  </div>
                </button>
                
                <button 
                  onClick={() => setExperienceLevel("Intermediate")}
                  className="bg-white text-black border-4 border-black p-4 text-lg sm:text-xl font-bold uppercase tracking-wider transform -skew-x-5 hover:bg-[#39FF14] transition-colors shadow-[6px_6px_0px_#00E5FF]"
                >
                  <div className="flex justify-between items-center">
                    <span>INTERMEDIATE</span>
                    <span className="text-sm opacity-70">Know the basics</span>
                  </div>
                </button>
                
                <button 
                  onClick={() => setExperienceLevel("Advanced")}
                  className="bg-[#00E5FF] text-black border-4 border-black p-4 text-lg sm:text-xl font-bold uppercase tracking-wider transform -skew-x-5 hover:bg-[#FF4655] hover:text-white transition-colors shadow-[6px_6px_0px_#39FF14]"
                >
                  <div className="flex justify-between items-center">
                    <span>ADVANCED</span>
                    <span className="text-sm opacity-70">Radiant tier ready</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* CHAT INTERFACE */
          <>
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              <div className="bg-black border-2 border-[#00E5FF] px-3 py-1 font-bold text-xs uppercase text-[#00E5FF] tracking-wider">
                Clearance: {experienceLevel}
              </div>
              <button
                onClick={handleClearChat}
                className="bg-[#FF4655] border-2 border-black px-3 py-1 font-bold text-xs uppercase text-black tracking-wider hover:bg-white transition-colors"
                title="Clear chat history"
              >
                ✕ CLEAR
              </button>
            </div>
            
            <div className="flex-1 h-[500px] bg-[#0F1923] border-4 border-black mt-8 p-4 sm:p-6 overflow-y-auto space-y-6 flex flex-col justify-start">
              {messages.length === 0 && (
                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                  <div className="text-center text-lg sm:text-xl text-gray-400 font-bold uppercase tracking-widest">
                    *AWAITING INQUIRY*<br/>Ask SAGE your tactical question.
                  </div>
                  
                  {/* Suggested Questions */}
                  <div className="w-full max-w-md space-y-2">
                    <p className="text-xs font-bold text-[#00E5FF] tracking-widest uppercase text-center mb-3">
                      // SUGGESTED INTEL REQUESTS
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SUGGESTED_QUESTIONS.map((q) => (
                        <button
                          key={q}
                          onClick={() => handleSuggestion(q)}
                          className="text-left bg-black/50 border-2 border-zinc-700 px-3 py-2 text-sm font-bold text-zinc-300 hover:border-[#39FF14] hover:text-[#39FF14] transition-colors truncate"
                        >
                          → {q}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start items-end mb-4'}`}>
                  
                  {m.role !== 'user' && (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 border-4 border-black bg-[#FF4655] shadow-[4px_4px_0px_#0F1923] mr-3 sm:mr-4 relative overflow-hidden bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-[size:4px_4px]">
                      <img loading="lazy" src={SAGE_AVATAR} alt="SAGE" className="w-full h-full object-cover relative z-10" />
                    </div>
                  )}

                  <div 
                    className={`max-w-[85%] sm:max-w-[80%] border-4 border-black p-3 sm:p-4 relative ${
                      m.role === 'user' 
                        ? 'bg-[#ECE8E1] text-black shadow-[4px_4px_0px_#FF4655]' 
                        : 'bg-[#39FF14] text-black shadow-[4px_4px_0px_#0F1923]'
                    }`}
                    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 95% 100%, 0% 100%)' }}
                  >
                    {/* Comic Speech Bubble Tail */}
                    <div className={`absolute bottom-[0px] ${m.role === 'user' ? '-right-3 border-l-4' : '-left-3 border-r-4'} w-0 h-0 border-t-8 border-b-8 border-transparent border-t-black transform translate-y-4`} />
                    
                    <p className="font-bold mb-1 uppercase tracking-wider text-sm">{m.role === 'user' ? 'Recruit' : 'SAGE'}</p>
                    {m.parts?.map((part: { type: string; text?: string }, index: number) => {
                      if (part.type === 'text') {
                        return <div key={index} className="text-base sm:text-lg leading-relaxed whitespace-pre-wrap">{part.text}</div>;
                      }
                      return null;
                    })}
                  </div>
                </div>
              ))}

              {(status === 'submitted' || status === 'streaming') && <TypingIndicator />}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="mt-4 sm:mt-8 flex gap-2 sm:gap-4 relative">
              <input
                className="flex-1 bg-white border-4 border-black px-4 sm:px-6 py-3 sm:py-4 text-black font-bold text-base sm:text-xl uppercase placeholder-gray-500 shadow-[4px_4px_0px_#ECE8E1] focus:outline-none focus:border-[#00E5FF] transition-colors"
                value={input}
                placeholder="ASK SAGE A QUESTION..."
                onChange={(e) => setInput(e.target.value)}
              />
              <button 
                type="submit" 
                disabled={status === 'submitted' || status === 'streaming'}
                className="bg-[#FF4655] border-4 border-black px-4 sm:px-8 py-3 sm:py-4 text-white font-black text-xl sm:text-2xl uppercase tracking-wider shadow-[4px_4px_0px_#0F1923] hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                SEND!
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
