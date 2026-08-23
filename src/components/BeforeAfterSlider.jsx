import React, { useState, useRef, useEffect } from 'react';

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const onTouchMove = (e) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', () => setIsDragging(false));
            window.addEventListener('touchmove', onTouchMove);
            window.addEventListener('touchend', () => setIsDragging(false));
        }
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', () => setIsDragging(false));
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', () => setIsDragging(false));
        };
    }, [isDragging]);

    return (
        <div
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] select-none overflow-hidden cursor-ew-resize bg-brand-800 border border-brand-500/20 shadow-brand-sm group"
            ref={containerRef}
            onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
            onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
        >
            <img src={beforeImage} className="absolute inset-0 w-full h-full object-cover pointer-events-none" alt="Before styling" loading="lazy" />

            <div
                className="absolute inset-0 w-full h-full"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img src={afterImage} className="absolute inset-0 w-full h-full object-cover pointer-events-none" alt="After styling" loading="lazy" />
            </div>

            <div
                className="absolute top-0 bottom-0 w-[2px] bg-brand-500 pointer-events-none flex items-center justify-center shadow-[0_0_15px_rgba(201,162,39,0.5)] transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(201,162,39,0.8)]"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
                <div className="w-8 h-8 bg-brand-900 border border-brand-500 rounded-full flex items-center justify-center text-brand-500 text-xs shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18 6-6-6-6" /><path d="m9 18-6-6 6-6" /></svg>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-brand-900/80 backdrop-blur-sm px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-brand-100 border border-brand-500/30 rounded-none pointer-events-none">Before</div>
            <div className="absolute top-4 right-4 bg-blush-500/90 backdrop-blur-sm px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-brand-900 border border-blush-400/50 rounded-none pointer-events-none">After</div>
        </div>
    );
}
