"use client";

import React from "react";

import PaintingPage from "@/app/components/desktop/Painting/Main";

import paintingsData from "@/app/utils/data/paintings";

function Painting({ params }) {
    const data = paintingsData[params.id];

    return <PaintingPage data={data} />
}

export default Painting;