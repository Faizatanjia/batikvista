"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";

import PaintingPage from "@/app/components/desktop/Painting/Main";

import paintingsData from "@/app/utils/data/paintings";

function Painting({ params }) {
    const data = paintingsData[params.id];

    const router = useRouter();

    useEffect(() => {
        if (isMobile) {
            router.push(`/mobile/painting/${params.id}`);
        }
        
    }, [])

    return <PaintingPage data={data} />
}

export default Painting;