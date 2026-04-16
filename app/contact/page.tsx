export default function ContactPage() {
  return (
    <div className="py-20 px-6 max-w-xl mx-auto">
      <h2 className="text-4xl font-black mb-4">REJOINS LE <span className="text-orange-600">STUDIO</span></h2>
      <p className="text-zinc-500 mb-10">Une question ou un projet spécial ? Envoie un message à Rivs.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Nom d'artiste" className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl focus:border-yellow-500 outline-none" />
        <input type="email" placeholder="Email" className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl focus:border-yellow-500 outline-none" />
        <textarea placeholder="Message..." rows={6} className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-xl focus:border-yellow-500 outline-none"></textarea>
        <button className="w-full bg-yellow-500 text-black font-black py-4 rounded-xl hover:bg-white transition">ENVOYER</button>
      </form>
    </div>
  );
}