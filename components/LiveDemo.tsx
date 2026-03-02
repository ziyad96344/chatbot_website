import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const suggestions = [
    "What is the enterprise pricing?",
    "Can it integrate with WhatsApp?",
    "How does the knowledge base work?"
];

const mockResponses: Record<string, string> = {
    "What is the enterprise pricing?": "Our Enterprise plan offers custom pricing based on your volume and tailored needs. It includes unlimited chatbots, priority support, and dedicated onboarding! Would you like to book a demo to discuss?",
    "Can it integrate with WhatsApp?": "Yes, absolutely! XotBot has a seamless one-click integration with WhatsApp Business API. You can manage all your WhatsApp queries directly via the AI.",
    "How does the knowledge base work?": "It's simple: you paste your website URL or upload PDFs/CSVs. XotBot scans it using advanced RAG and stores the data in a Vector Database. When a user asks a question, it finds the exact answer from your data!"
};

const LiveDemo: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const widgetRef = useRef<HTMLDivElement>(null);
    
    const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([
        { role: 'bot', text: 'Hi there! I am XotBot AI. I was trained on this website in 60 seconds. Ask me anything!' }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );

            if (widgetRef.current) {
                gsap.fromTo(widgetRef.current,
                    { opacity: 0, scale: 0.95, y: 30 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.8,
                        delay: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: widgetRef.current,
                            start: "top 80%",
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSuggestionClick = (question: string) => {
        setMessages(prev => [...prev, { role: 'user', text: question }]);
        setIsTyping(true);
        
        // Mock network delay
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { 
                role: 'bot', 
                text: mockResponses[question] || "That's a great question! However, this is just a quick demo. Sign up for a free trial to experience the full power of XotBot." 
            }]);
        }, 1200);
    };

    return (
        <section ref={sectionRef} className="min-h-screen py-20 px-6 md:px-12 bg-[#080808] relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-[20%] w-[30%] h-[50%] bg-red-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-[20%] w-[30%] h-[50%] bg-orange-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 mx-auto">
                
                {/* Text Content */}
                <div className="text-center lg:text-left">
                    <span className="text-red-500/90 font-mono text-[11px] md:text-sm tracking-[0.3em] uppercase mb-4 block font-bold">
                        Interactive Demo
                    </span>
                    <h2 
                        className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-4 leading-[1.1]"
                        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                        Experience The<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Magic Live</span>
                    </h2>
                    <p className="text-white/70 max-w-lg mx-auto lg:mx-0 text-base md:text-lg font-light leading-relaxed mb-8">
                        Don't just take our word for it. Try chatting with XotBot right now. It was trained instantly on the contents of this website.
                    </p>

                    <div className="hidden lg:flex flex-col gap-3 max-w-md">
                        <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-2">Try asking these:</p>
                        {suggestions.map((q, i) => (
                            <button 
                                key={i}
                                onClick={() => handleSuggestionClick(q)}
                                disabled={isTyping}
                                className="text-left px-5 py-3 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-red-500/10 hover:border-red-500/30 text-sm text-white/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group flex justify-between items-center"
                            >
                                {q}
                                <span className="opacity-0 group-hover:opacity-100 text-red-500 transition-opacity">→</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chat Widget Mockup */}
                <div className="flex justify-center lg:justify-end">
                    <div ref={widgetRef} className="w-full max-w-[400px] h-[580px] bg-[#0a0a0a] border border-white/10 rounded-[28px] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(16,185,129,0.1)] relative">
                        
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#0d0d0d] to-[#121212] p-5 border-b border-white/5 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0a0a0a] rounded-full" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>XotBot Agent</h3>
                                    <p className="text-[10px] text-red-500 flex items-center gap-1">
                                        <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" /> Replies instantly
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-5 scroll-smooth custom-scrollbar flex flex-col gap-4">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`
                                        max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed
                                        ${msg.role === 'user' 
                                            ? 'bg-emerald-500 text-white rounded-br-sm shadow-[0_4px_14px_rgba(16,185,129,0.3)]' 
                                            : 'bg-white/5 text-white/90 border border-white/10 rounded-bl-sm'}
                                    `}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm p-3.5 flex items-center gap-1.5 w-[60px]">
                                        <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" />
                                        <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0.2s' }} />
                                        <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0.4s' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Mobile quick actions */}
                        <div className="lg:hidden px-5 py-2 flex flex-col gap-2 bg-[#0a0a0a] shrink-0">
                             {suggestions.map((q, i) => (
                                <button 
                                    key={i}
                                    onClick={() => handleSuggestionClick(q)}
                                    disabled={isTyping}
                                    className="text-left px-3 py-2 bg-white/5 border border-white/5 rounded-lg text-[11px] text-white/70 transition-colors hover:bg-white/10 disabled:opacity-50 whitespace-nowrap overflow-hidden text-ellipsis"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-[#0d0d0d] border-t border-white/5 flex items-center gap-2 shrink-0">
                            <div className="flex-1 bg-white/5 border border-white/10 rounded-full h-10 px-4 flex items-center opacity-50 cursor-not-allowed">
                                <span className="text-xs text-white/30 truncate">Type a message... (Select suggestion)</span>
                            </div>
                            <button className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 opacity-50 cursor-not-allowed">
                                <svg className="w-4 h-4 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255,255,255,0.1);
                    border-radius: 10px;
                }
            `}</style>
        </section>
    );
};

export default LiveDemo;
