import React, { useRef, useCallback, memo } from "react";

const GlowCard = memo(({ card, index, children }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = useCallback(
    (index) => (e) => {
      const card = cardRefs.current[index];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;
      card.style.setProperty("--start", angle + 60);
    },
    []
  );

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-8.5 mb-0 break-inside-avoid-column"
      role="region"
      aria-label={`Project card ${index + 1}: ${card.desc?.slice(0, 20)}...`}
    >
      {children}
      <div className="mt-5 space-y-4">
        <p className="text-white-50 text-base text-justify">{card.desc}</p>
        <div className="flex justify-end gap-5">
          <a
            href={card.link}
            className="inline-block underline text-purple-50 font-semibold transition-transform duration-200 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View code for ${card.desc?.slice(0, 20)}`}
          >
            <span>View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
});

GlowCard.displayName = "GlowCard";

export default GlowCard;
