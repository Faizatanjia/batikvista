"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isDesktop } from "react-device-detect";

import AboutPage from "@/app/components/mobile/About/Main";

function About() {
    const router = useRouter();

    useEffect(() => {
        if (isDesktop) {
            router.push("/about");
        }

    }, []);

    return <AboutPage />;
}

export default About;