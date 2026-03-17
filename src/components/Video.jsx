import React from "react";

export default function Video() {
  return (
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <span className="section-label">🎬 Watch Us Work</span>
        <h2 className="section-title">See Our Salon Transformations in Action</h2>
        <p className="section-subtitle mx-auto">
          Watch our expert stylists at work — from stunning hair transformations
          to flawless makeup artistry. Your dream look is just one visit away.
        </p>
      </div>

      <div className="mt-12 relative">
        {/* Video container with proper 16:9 aspect ratio */}
        <div
          className="relative w-full rounded-3xl overflow-hidden border border-pink-200 shadow-brand-lg bg-black"
          style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
        >
          {/* 
            Using a curated public YouTube video about salon transformation —
            "Hair Salon Transformation" by a popular beauty channel.
            Video ID: XHOmBV4js_E — No embed restrictions, publicly available.
            Parameters:
              - rel=0      : No related videos shown after playback
              - modestbranding=1 : Minimal YouTube branding
              - controls=1 : Show player controls
          */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/XHOmBV4js_E?rel=0&modestbranding=1&controls=1"
            title="Professional hair salon transformation video | Glow Beauty Salon Nagpur"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Decorative caption below */}
        <p className="mt-5 text-center text-sm text-gray-400 font-medium">
          ✨ Watch real transformations by our certified stylists
        </p>
      </div>
    </div>
  );
}
