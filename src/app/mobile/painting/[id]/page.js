"use client";

import React from "react";
import PaintingBlog from "@/app/components/mobile/Blog/Main";

import paintingsData from "@/app/utils/data/paintings";

function Painting({ params }) {
    const data = paintingsData[params.id]

    return <PaintingBlog data={data} />;
}

export default Painting;