"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";

import AboutPage from "@/app/components/desktop/About/Main";

function About() {
    const router = useRouter();

    useEffect(() => {
        if (isMobile) {
            router.push("/mobile/about");
        }

    }, []);
    
    return <AboutPage />
}

export default About;