"use client";

import { useUser } from "@/classes/User/UserHook";
import WelcomeText, { WelcomeTextSkeleton } from "@/components/text/WelcomeText";

export default function WelcomeBar() {
    const { user, loading } = useUser();

    return (
        <>
            {user && <WelcomeText username={user.username} />}

            {loading && <WelcomeTextSkeleton />}
        </>
    );
}
