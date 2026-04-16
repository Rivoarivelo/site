import AudioPlayer from "@/components/AudioPlayer";
import "./globals.css";
import Navbar from "@/components/Navbar";

import YellowBubbles from "@/components/YellowBubbles";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white min-h-screen relative">
        <YellowBubbles />
        <Navbar />
        {children}
        <AudioPlayer />
      </body>
    </html>
  );
}