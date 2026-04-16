export default function ServicesPage() {
  const packs = [
    { name: "MP3 Lease", price: "25.000 Ar", features: ["Fichier MP3", "Utilisation YouTube", "Limité à 5000 streams"] },
    { name: "WAV Lease", price: "75.000 Ar", features: ["Fichier Haute Qualité", "Utilisation Radio", "Limité à 50.000 streams"] },
    { name: "Exclusif", price: "Sur Devis", features: ["Droit de propriété complet", "Fichiers séparés (Stems)", "Utilisation illimitée"] },
  ];

  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-black mb-12 text-center">LICENCES & <span className="text-orange-600">SERVICES</span></h2>
      <div className="grid md:grid-cols-3 gap-8">
        {packs.map((p, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-yellow-500 transition">
            <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
            <p className="text-3xl font-black text-yellow-500 mb-6">{p.price}</p>
            <ul className="text-zinc-400 space-y-3 text-sm">
              {p.features.map((f, j) => <li key={j}>• {f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}