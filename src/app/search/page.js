"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";

import SearchPage from "@/app/components/desktop/Search/Main";

function Search() {
    const router = useRouter();

    useEffect(() => {
        if (isMobile) {
            router.push("/mobile/search");
        }

    }, []);

    return <SearchPage />
}

export default Search;