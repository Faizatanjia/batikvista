"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";

import ArtWorksPage from "@/app/components/desktop/ArtWorks/Main";

function Artworks() {
    const router = useRouter();

    useEffect(() => {
        if (isMobile) {
            router.push("/mobile/art-works");
        }
        
    }, [])

    return <ArtWorksPage />;
}

export default Artworks;