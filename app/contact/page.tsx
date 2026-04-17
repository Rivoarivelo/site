"use client";
import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Envoi en cours...");
    const formData = new FormData(event.target);

    // Ton accès Web3Forms (gratuit sur web3forms.com)
    formData.append("access_key", "799b13a2-ff51-4a89-bbe1-59abb19d8bc1"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message envoyé avec succès !");
      event.target.reset();
    } else {
      console.log("Erreur", data);
      setResult(data.message);
    }
  };

  return (
    <div className="py-20 px-6 max-w-xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">
          REJOINS LE <span className="text-orange-600">STUDIO</span>
        </h2>
        <p className="text-zinc-500">
          Une question ou un projet spécial ? Envoie un message à Rivs.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        {/* Champs invisibles pour configurer l'email */}
        <input type="hidden" name="subject" value="Nouveau message de Rivs On The Beat" />
        <input type="hidden" name="from_name" value="Rivs Portfolio" />

        <input 
          type="text" 
          name="name"
          required
          placeholder="Nom d'artiste" 
          className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl focus:border-yellow-500 outline-none text-white transition-all" 
        />
        <input 
          type="email" 
          name="email"
          required
          placeholder="Email" 
          className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl focus:border-yellow-500 outline-none text-white transition-all" 
        />
        <textarea 
          name="message"
          required
          placeholder="Parle-moi de ton projet (ex: mixage, beat exclusif...)" 
          rows={6} 
          className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl focus:border-yellow-500 outline-none text-white transition-all"
        ></textarea>

        <button 
          type="submit"
          className="w-full bg-yellow-500 text-black font-black py-4 rounded-xl hover:bg-white transition flex items-center justify-center gap-2 uppercase tracking-widest"
        >
          <Send size={18} /> {result || "Envoyer le message"}
        </button>
      </form>

      {/* --- SECTION RESEAUX SOCIAUX --- */}
      <div className="mt-16 pt-10 border-t border-zinc-900 text-center">
        <p className="text-zinc-500 text-sm mb-6 uppercase tracking-widest font-bold">Retrouve-moi sur</p>
        <div className="flex justify-center">
          <a 
            href="https://www.facebook.com/profile.php?id=61579198421477" // Remplace par ton lien
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 text-zinc-400 hover:text-blue-500 transition"
          >
            <div className="p-4 bg-zinc-900 rounded-full group-hover:bg-blue-600/10 border border-zinc-800 group-hover:border-blue-500 transition shadow-xl">
              <MessageCircle size={28} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-tighter">Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
}