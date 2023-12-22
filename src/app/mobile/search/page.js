import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isDesktop } from "react-device-detect";

import SearchPage from "@/app/components/mobile/Search/Main";

function Search() {
    const router = useRouter();
    
    useEffect(() => {
        if (isDesktop) {
            router.push("/search");
        }

    }, []);

    return <SearchPage />;
}

export default Search;