"use client";

import React from "react";

import NavigationBar from "@/app/components/mobile/reuse/NavigationBar/Main";
import Drawer from "@/app/components/mobile/reuse/Drawer/Main";
import NotableArtworks from "./NotableArtworks/Main";
import MusicPlayer from "@/app/components/mobile/reuse/MusicPlayer/Main";

export default function Main() {
  return (
    <Drawer>
      <div className="flex min-h-screen flex-col bg-white">
        {/* Navigation Bar */}
        <NavigationBar 
          pageName="Notable Indonesian Artworks" 
          menu 
        />
        <div className="max-w-full mt-5 px-10">
          {/* Introduction */}
          <div className="max-w-full">
            <p className="w-full font-museo font-[300] text-paragraph-black text-sm">
              Indonesia, with its diverse cultural tapestry and rich history,
              has been eloquently captured through the brushstrokes of visionary
              artists. Among the custodians of the nation&apos; cultural
              heritage are Raden Saleh, Sindudarsono Sudjojono, and Hendra
              Gunawan, whose historical paintings have become timeless
              reflections of Indonesia&apos; past, contributing to the
              collective identity and cultural legacy of the nation.
            </p>
          </div>

          {/* Notable artworks */}
          <NotableArtworks />
        </div>

        {/* Music Player */}
        <MusicPlayer />
      </div>
    </Drawer>
  );
}
