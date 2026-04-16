"use client";
import { Play, Download } from "lucide-react";
import { BEATS } from "@/constants/beats";

interface BeatListProps {
  onPlay: (beat: any) => void;
}

export default function BeatList({ onPlay }: BeatListProps) {
  return (
    <div className="w-full overflow-x-auto">
      {/* --- EN-TÊTE DU TABLEAU (Visible aussi sur mobile maintenant) --- */}
      <div className="grid grid-cols-6 md:grid-cols-6 gap-2 md:gap-4 px-4 md:px-8 py-4 text-zinc-500 text-[9px] md:text-[11px] font-black uppercase tracking-widest border-b border-zinc-800/50 min-w-[500px] md:min-w-full">
        <div className="col-span-2">Nom</div>
        <div className="text-center">BPM</div>
        <div className="text-center">Time</div>
        <div className="text-center">Note</div>
        <div className="text-right">Genre</div>
      </div>

      {/* --- LISTE DES MUSIQUES --- */}
      <div className="flex flex-col gap-2 mt-4 min-w-[500px] md:min-w-full">
        {BEATS.map((beat) => (
          <div
            key={beat.id}
            onClick={() => onPlay(beat)}
            className="group grid grid-cols-6 items-center gap-2 md:gap-4 bg-zinc-900/30 border border-zinc-800/50 p-3 md:p-4 rounded-xl hover:bg-zinc-800/40 hover:border-yellow-500/30 transition-all cursor-pointer"
          >
            {/* Colonne NOM (Tronqué pour laisser de la place aux autres) */}
            <div className="col-span-2 flex items-center gap-2 md:gap-4 min-w-0">
              <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Play size={14} fill="white" className="text-white" />
              </div>
              <h3 className="font-bold text-white text-xs md:text-base truncate" title={beat.name}>
                {beat.name}
              </h3>
            </div>

            {/* Colonne BPM (Affiché sur mobile) */}
            <div className="text-center text-zinc-400 font-mono text-[10px] md:text-sm">
              {beat.bpm}
            </div>

            {/* Colonne DURÉE (Affiché sur mobile) */}
            <div className="text-center text-zinc-400 font-mono text-[10px] md:text-sm">
              {beat.duration}
            </div>

            {/* Colonne NOTE (Affiché sur mobile) */}
            <div className="text-center">
              <span className="text-yellow-500 font-bold text-[9px] md:text-xs bg-yellow-500/10 px-2 py-1 rounded-full">
                {beat.note}
              </span>
            </div>

            {/* Colonne GENRE & DOWNLOAD */}
            <div className="flex items-center justify-end gap-2 md:gap-4">
              <span className="hidden sm:block text-[9px] text-zinc-600 font-black uppercase">
                {beat.genre || "Trap"}
              </span>
              <a
                href={beat.file}
                download
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-800 p-2 rounded-lg hover:bg-yellow-500 hover:text-black transition flex-shrink-0"
              >
                <Download size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}