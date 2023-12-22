"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isDesktop } from "react-device-detect";

import LandingPage from "@/app/components/mobile/Home/Main";

function Home() {
    const router = useRouter();

    useEffect(() => {
        if (isDesktop) {
            router.push("/");
        }

    }, []);

    return <LandingPage />;
}

export default Home;