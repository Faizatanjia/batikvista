"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isDesktop } from "react-device-detect";

import PaintingBlog from "@/app/components/mobile/Blog/Main";

import paintingsData from "@/app/utils/data/paintings";

function Painting({ params }) {
    const router = useRouter();
    const data = paintingsData[params.id];

    useEffect(() => {
        if (isDesktop) {
            router.push(`/painting/${params.id}`);
        }

    }, []);

    return <PaintingBlog data={data} />;
}

export default Painting;