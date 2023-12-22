"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";

import LandingPage from "@/app/components/desktop/Home/Main";

export default function Home() {
  const router = useRouter();

    useEffect(() => {
        if (isMobile) {
            router.push("/mobile/");
        }

    }, []);

  return (
    <LandingPage />
  );
}
