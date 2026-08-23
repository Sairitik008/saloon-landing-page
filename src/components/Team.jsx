import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const team = [
    { name: "Aisha", role: "Master Stylist", img: "/images/team-1.JPG" },
    { name: "Priya", role: "Bridal Makeup Artist", img: "/images/team-2.JPG" },
    { name: "Meera", role: "Aesthetician", img: "/images/team-3.JPG" },
];

export default function Team() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="bg-brand-900 py-24 section-alt" id="team" ref={ref}>
            <div className={`container transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`}>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-display text-4xl text-white tracking-widest uppercase mb-4">Meet Our Artisans</h2>
                    <div className="w-16 h-[1px] bg-brand-500 mx-auto mb-6"></div>
                    <p className="text-brand-100/70 font-light text-sm leading-relaxed max-w-md mx-auto">
                        Your beauty journey is guided by passionate experts who believe in cultivating confidence and timeless elegance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {team.map((member, i) => (
                        <div key={i} className="group relative overflow-hidden bg-brand-800 border border-brand-500/10 cursor-pointer shadow-brand-sm hover:border-blush-500/40 transition-colors duration-300">
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale-[40%] group-hover:grayscale-0 sepia-[20%]"
                                    onError={(e) => { e.target.src = "https://images.pexels.com/photos/3992881/pexels-photo-3992881.jpeg?auto=compress&cs=tinysrgb&w=600"; }}
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>

                            <div className="absolute inset-x-0 bottom-0 p-8 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="font-display text-2xl text-white tracking-widest mb-1 shadow-sm">{member.name}</h3>
                                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-blush-500 font-bold">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
