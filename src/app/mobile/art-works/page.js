"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isDesktop } from "react-device-detect";

import ArtWorksPage from "@/app/components/mobile/ArtWorks/Main";

function Artworks() {
    const router = useRouter();

    useEffect(() => {
        if (isDesktop) {
            router.push("/art-works");
        }

    }, []);

    return <ArtWorksPage />;
}

export default Artworks;