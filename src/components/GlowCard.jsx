import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  // refs for all the cards
  const cardRefs = useRef([]);

  // when mouse moves over a card, rotate the glow effect
  const handleMouseMove = (index) => (e) => {
    // get the current card
    const card = cardRefs.current[index];
    if (!card) return;

    // get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // calculate the angle from the center of the card to the mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // adjust the angle so that it's between 0 and 360
    angle = (angle + 360) % 360;

    // set the angle as a CSS variable
    card.style.setProperty("--start", angle + 60);
  };

  // return the card component with the mouse move event
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-8.5 mb-0 break-inside-avoid-column"
    >
      {children}
      <div className="mt-5 space-y-4">
        <p className="text-white-50 text-base text-justify">{card.desc}</p>
        <div className="flex justify-end gap-5">
          <div className="relative z-50">
            <div className="flex justify-end gap-5">
              <div className="relative z-50">
                <a
                  href={card.link}
                  className="inline-block underline text-purple-50 font-semibold transition-transform duration-200  hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowCard;
