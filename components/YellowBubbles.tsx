"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function YellowBubbles() {
  const [bubbles, setBubbles] = useState<any[]>([]);

  // On génère les bulles UNIQUEMENT après le chargement sur le navigateur
  useEffect(() => {
    const generatedBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 120 + 60,
      x: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));
    setBubbles(generatedBubbles);
  }, []);

  // Si les bulles ne sont pas encore générées, on ne rend rien
  if (bubbles.length === 0) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-black">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full bg-yellow-500/10 blur-[10px]"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.x}%`,
            bottom: "-20%",
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: ["0%", `${Math.random() * 30 - 15}%`],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}