"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isDesktop } from "react-device-detect";

import ArtistPage from "@/app/components/mobile/Artist/Main";

function Artist() {
    const router = useRouter();

    useEffect(() => {
        if (isDesktop) {
            router.push("/artist/raden-saleh");
        }

    }, []);

    return <ArtistPage />;
}

export default Artist;