"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";

import ArtistPage from "@/app/components/desktop/Artist/Main";

function Artist() {
    const router = useRouter();

    useEffect(() => {
        if (isMobile) {
            router.push("/mobile/artist/raden-saleh");
        }
        
    }, [])

    return <ArtistPage />;
}

export default Artist;