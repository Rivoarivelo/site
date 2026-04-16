"use client";
import { useState } from "react";
import BeatList from "@/components/BeatList";
import AudioPlayer from "@/components/AudioPlayer";

export default function BeatsPage() {
  const [selectedBeat, setSelectedBeat] = useState(null);

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-black mb-8 italic">
        Catalogue <span className="text-yellow-500">Complet</span>
      </h2>
      
      {/* On passe la fonction de mise à jour au composant */}
      <BeatList onPlay={(beat) => setSelectedBeat(beat)} />

      {/* Le player reçoit le morceau choisi et se lance */}
      <AudioPlayer currentBeat={selectedBeat} />
    </div>
  );
}