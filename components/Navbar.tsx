"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icônes pour le menu mobile
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "BEATS", href: "/beats" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center p-6 border-b border-zinc-800 backdrop-blur-md sticky top-0 z-[100] bg-black/50">
      {/* LOGO */}
      <Link href="/">
        <h1 className="text-2xl font-black tracking-tighter cursor-pointer">
          RIVS<span className="text-orange-600">ONTHEBEAT</span>
        </h1>
      </Link>

      {/* MENU DESKTOP (Caché sur mobile: hidden, visible sur md:flex) */}
      <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="hover:text-yellow-500 transition">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* BOUTON S'ABONNER (Visible seulement sur Desktop pour épurer le mobile) */}
      {/* Ajouter lien sur le bouton vers youtube */}
      <a href="https://www.youtube.com/@rivorakotoniaina7764" target="_blank" rel="noopener noreferrer">
        <button className="hidden md:block bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-yellow-500 transition">
          S'abonner
        </button>
      </a>

      {/* BOUTON MENU MOBILE (Visible seulement sur mobile: flex, caché sur md:hidden) */}
      <button 
        className="md:hidden text-white transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* OVERLAY MOBILE (S'affiche quand isOpen est vrai) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[80px] left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-6 md:hidden z-50 shadow-2xl"
          >
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={() => setIsOpen(false)} // Ferme le menu après clic
                className="text-2xl font-black tracking-widest hover:text-orange-600 transition"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-white text-black w-full py-4 rounded-xl font-bold uppercase tracking-widest mt-4">
              S'abonner
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}