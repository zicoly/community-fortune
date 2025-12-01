import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FlyingCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const suits = [
      { symbol: "♠", color: "#000" },
      { symbol: "♣", color: "#000" },
      { symbol: "♥", color: "#ef4444" },
      { symbol: "♦", color: "#ef4444" },
    ];
    const values = ["A", "K", "Q", "J", "10", "9", "8", "7"];

    const newCards = Array.from({ length: 12 }, (_, i) => {
      const suit = suits[Math.floor(Math.random() * suits.length)];
      const value = values[Math.floor(Math.random() * values.length)];

      return {
        id: i,
        suit: suit.symbol,
        color: suit.color,
        value,
        startX: Math.random() * 80 + 10, // left position
        startY: Math.random() * 50 + 10, // start from random height
        flightX: Math.random() * 200 - 100, // angle toward viewer
        flightY: Math.random() * 200 - 100,
        delay: Math.random() * 2,
        duration: 10 + Math.random() * 16,
        rotateStart: Math.random() * 360,
      };
    });

    setCards(newCards);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className="absolute"
          style={{
            left: `${card.startX}%`,
            top: `${card.startY}%`,
            perspective: "2000px",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="relative bg-white rounded-xl border-4 border-gray-200"
            style={{
              width: "140px",
              height: "200px",
              boxShadow:
                "0 10px 20px rgba(0,0,0,0.25), 0 20px 40px rgba(0,0,0,0.15)",
              transformStyle: "preserve-3d",
            }}
            initial={{
              z: -1400, // far in distance
              scale: 0.1, // tiny far away
              rotateY: 0,
              rotateX: 0,
              rotateZ: card.rotateStart,
              opacity: 0,
            }}
            animate={{
              z: 150, // fly toward screen
              x: card.flightX,
              y: card.flightY,
              scale: 2.5, // zoom as it flies toward camera
              rotateY: [0, 180, 360],
              rotateX: [0, 40, -40, 20, -20],
              opacity: [0, 1, 1, 0], // fade out at end
            }}
            transition={{
              duration: card.duration,
              delay: card.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            {/* 3D card thickness */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, #ddd, #fff, #eee)",
                transform: "translateZ(-6px)",
                borderRadius: "12px",
              }}
            />

            {/* Card face */}
            <div
              className="relative w-full h-full p-1 flex flex-col"
              style={{
                transform: "translateZ(2px)",
              }}
            >
              <div
                className="flex flex-col items-start"
                style={{ color: card.color }}
              >
                <span className="text-2xl font-bold">{card.value}</span>
                <span className="text-3xl">{card.suit}</span>
              </div>

              <div
                className="flex-1 flex items-center justify-center text-6xl"
                style={{ color: card.color }}
              >
                {card.suit}
              </div>

              <div
                className="flex flex-col items-start rotate-180"
                style={{ color: card.color }}
              >
                <span className="text-2xl font-bold">{card.value}</span>
                <span className="text-3xl">{card.suit}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FlyingCards;
