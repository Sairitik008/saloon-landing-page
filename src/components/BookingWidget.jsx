import React, { useState } from "react";

export default function BookingWidget() {
    const [date, setDate] = useState("");
    const [service, setService] = useState("");
    const [therapist, setTherapist] = useState("");
    const [time, setTime] = useState("");

    const timeSlots = [
        "09:00 AM", "10:30 AM", "12:00 PM",
        "01:30 PM", "03:00 PM", "04:30 PM",
    ];

    return (
        <div className="bg-brand-50 p-8 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            {/* Top subtle inner border */}
            <div className="absolute inset-2 border border-brand-500/20 pointer-events-none" />

            <div className="relative z-10 flex-1">
                <h3 className="font-display text-2xl text-brand-900 mb-6 text-center">SCHEDULE YOUR ESCAPE</h3>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Booking system coming soon!"); }}>
                    <div className="space-y-1">
                        <label className="text-[0.65rem] uppercase tracking-[0.15em] text-brand-900/70 font-semibold block">Date</label>
                        <input
                            type="date"
                            className="w-full bg-transparent border-b border-brand-900/20 py-2 text-brand-900 focus:outline-none focus:border-brand-500 transition-colors"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[0.65rem] uppercase tracking-[0.15em] text-brand-900/70 font-semibold block">Service</label>
                        <select
                            className="w-full bg-transparent border-b border-brand-900/20 py-2 text-brand-900 focus:outline-none focus:border-brand-500 transition-colors appearance-none cursor-pointer"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select a treatment</option>
                            <option value="Radiant Glow Facial">Radiant Glow Facial</option>
                            <option value="Signature Massage">Signature Massage</option>
                            <option value="Bridal Makeup">Bridal Makeup</option>
                            <option value="Hair Artistry">Hair Artistry</option>
                            <option value="Luxe Manicure">Luxe Manicure</option>
                        </select>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[0.65rem] uppercase tracking-[0.15em] text-brand-900/70 font-semibold block">Therapist</label>
                        <select
                            className="w-full bg-transparent border-b border-brand-900/20 py-2 text-brand-900 focus:outline-none focus:border-brand-500 transition-colors appearance-none cursor-pointer"
                            value={therapist}
                            onChange={(e) => setTherapist(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select professional</option>
                            <option value="Eleanor V.">Eleanor V.</option>
                            <option value="Sophia T.">Sophia T.</option>
                            <option value="Isabella R.">Isabella R.</option>
                            <option value="Anyone Available">Anyone Available</option>
                        </select>
                    </div>

                    <div className="pt-2">
                        <label className="text-[0.65rem] uppercase tracking-[0.15em] text-brand-900/70 font-semibold block mb-3">Time Slots</label>
                        <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map(slot => (
                                <button
                                    key={slot}
                                    type="button"
                                    onClick={() => setTime(slot)}
                                    className={`py-2 text-[0.65rem] tracking-[0.1em] border transition-all ${time === slot ? "bg-brand-500 text-brand-900 border-brand-500 font-bold" : "border-brand-900/20 text-brand-900/70 hover:border-brand-500 bg-white"}`}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pt-6 mt-auto">
                        <button type="submit" className="w-full bg-brand-500 text-brand-900 py-4 text-[0.7rem] tracking-[0.15em] font-bold uppercase hover:bg-brand-400 transition-colors">
                            CONFIRM BOOKING
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
