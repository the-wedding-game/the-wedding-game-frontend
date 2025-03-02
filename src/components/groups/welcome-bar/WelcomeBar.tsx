"use client";

import { useUser } from "@/classes/User/UserHook";
import TitleText, { TitleTextSkeleton } from "@/components/text/TitleText";

export default function WelcomeBar() {
    const { user, loading } = useUser();

    return (
        <>
            {user && <TitleText>Welcome {user.username} 🤩</TitleText>}
            {loading && <TitleTextSkeleton w={"450"} />}
        </>
    );
}
