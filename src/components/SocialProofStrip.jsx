import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const MESSAGES = [
    "Priya just booked a Bridal Makeup session ✨",
    "3 people are currently viewing these services",
    "Anita recently left a 5-star review ⭐",
    "Only 2 weekend slots available this week",
];

export default function SocialProofStrip() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setFade(false); // trigger fade out
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % MESSAGES.length);
                setFade(true); // trigger fade in
            }, 500);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="inline-flex items-center gap-3 bg-brand-900/80 backdrop-blur-sm border border-brand-500/20 px-6 py-2.5 rounded-full h-11 overflow-hidden shadow-[0_0_20px_rgba(232,180,184,0.1)] transition-colors duration-500 hover:border-blush-500/40">
            <Sparkles size={14} className="text-blush-500 shrink-0" />
            <span className={`text-[0.65rem] md:text-xs font-medium tracking-[0.08em] uppercase text-brand-100/90 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                {MESSAGES[index]}
            </span>
        </div>
    );
}
