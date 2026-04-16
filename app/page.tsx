"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // On importe Link pour la navigation

export default function Home() {
  return (
    <section className="py-32 px-6 text-center max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-black mb-10 leading-[0.9] italic"
      >
        L'ÉNERGIE DE <span className="text-orange-600">MADA</span> <br />
        DANS VOS OREILLES.
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-zinc-500 max-w-2xl mx-auto text-lg mb-12"
      >
        Propulse ta carrière avec des prods uniques signées Rivs. 
        Le son de demain, fabriqué aujourd'hui à Madagascar.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center gap-4"
      >
        {/* L'ACTION EST ICI */}
        <Link href="/beats">
          <button className="bg-orange-600 hover:bg-orange-500 hover:scale-105 transition-all text-white px-10 py-5 rounded-full font-black text-lg shadow-xl shadow-orange-900/20 uppercase tracking-tighter">
            Explorer les Beats
          </button>
        </Link>
      </motion.div>
    </section>
  );
}