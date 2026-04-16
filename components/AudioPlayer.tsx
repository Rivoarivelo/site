"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, SkipForward, SkipBack } from "lucide-react";

interface PlayerProps {
  currentBeat: any;
}

export default function AudioPlayer({ currentBeat }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 1. Déclencher la lecture automatique quand le beat change
  useEffect(() => {
    if (currentBeat && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log("Lecture bloquée par le navigateur:", error));
    }
  }, [currentBeat]);

  // 2. Fonction pour alterner Play/Pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // On n'affiche rien si aucun beat n'est sélectionné
  if (!currentBeat) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-950/90 backdrop-blur-xl border-t border-zinc-800 p-4 z-[100] animate-in slide-in-from-bottom duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Infos Beat */}
        <div className="flex items-center gap-4 w-1/3">
          <div className="w-12 h-12 bg-zinc-800 rounded overflow-hidden shadow-lg border border-zinc-700">
            {/* Si tu as une image dans ton objet beat : */}
            <img src={currentBeat.cover || "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=100"} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <h4 className="font-bold text-white text-sm truncate uppercase tracking-tighter">{currentBeat.name}</h4>
            <p className="text-yellow-500 text-[10px] font-mono uppercase tracking-widest">{currentBeat.note} • {currentBeat.bpm} BPM</p>
          </div>
        </div>

        {/* Contrôles Principaux */}
        <div className="flex flex-col items-center gap-2 w-1/3">
          <div className="flex items-center gap-6">
            <SkipBack className="text-zinc-600 hover:text-white cursor-pointer transition" size={20} />
            <button 
              onClick={togglePlay}
              className="bg-white text-black p-3 rounded-full hover:scale-110 active:scale-95 transition shadow-lg shadow-white/10"
            >
              {isPlaying ? <Pause fill="black" size={24} /> : <Play fill="black" size={24} />}
            </button>
            <SkipForward className="text-zinc-600 hover:text-white cursor-pointer transition" size={20} />
          </div>
          
          {/* L'élément audio invisible qui contient le fichier */}
          <audio 
            ref={audioRef} 
            src={currentBeat.file} 
            onEnded={() => setIsPlaying(false)} 
          />
        </div>

        {/* Volume & Mètre (Design Pro) */}
        <div className="flex justify-end items-center gap-4 w-1/3">
          <div className="hidden md:flex items-center gap-2">
            <Volume2 className="text-zinc-500" size={18} />
            <div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-yellow-500"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}