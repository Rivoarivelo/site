"use client";
import { Send } from "lucide-react"; // On garde Send car il existe en 1.8.0
import { useState } from "react";

export default function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Envoi en cours...");
    const formData = new FormData(event.target);
    formData.append("access_key", "TON_ACCESS_KEY_ICI"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message envoyé !");
      event.target.reset();
    } else {
      setResult("Erreur lors de l'envoi.");
    }
  };

  return (
    <div className="py-20 px-6 max-w-xl mx-auto">
      <h2 className="text-4xl font-black mb-4">REJOINS LE <span className="text-orange-600">STUDIO</span></h2>
      <p className="text-zinc-500 mb-10">Une question ou un projet spécial ? Envoie un message à Rivs.</p>
      
      <form onSubmit={onSubmit} className="space-y-4">
        <input name="name" type="text" placeholder="Nom d'artiste" className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl focus:border-yellow-500 outline-none text-white" required />
        <input name="email" type="email" placeholder="Email" className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl focus:border-yellow-500 outline-none text-white" required />
        <textarea name="message" placeholder="Message..." rows={6} className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl focus:border-yellow-500 outline-none text-white" required></textarea>
        <button className="w-full bg-yellow-500 text-black font-black py-4 rounded-xl hover:bg-white transition flex items-center justify-center gap-2">
          <Send size={18} /> {result || "ENVOYER"}
        </button>
      </form>

      {/* Bouton Facebook avec SVG Manuel (Zéro erreur de build) */}
      <div className="mt-12 flex justify-center">
        <a 
          href="https://www.facebook.com/rrivorakotoniaina1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 group"
        >
          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-full group-hover:border-blue-500 transition shadow-lg">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-zinc-400 group-hover:text-blue-500"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </div>
          <span className="text-[10px] font-bold text-zinc-500 group-hover:text-white uppercase tracking-widest">Facebook</span>
        </a>
      </div>
    </div>
  );
}