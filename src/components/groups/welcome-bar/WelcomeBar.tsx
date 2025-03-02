"use client";

import { useUser } from "@/classes/User/UserHook";
import TitleText, { TitleTextSkeleton } from "@/components/text/TitleText";
import AnimationWrapper from "@/components/framer-motion/AnimationWrapper";
import AnimationFade from "@/components/framer-motion/AnimationFade";

export default function WelcomeBar() {
    const { user, loading } = useUser();

    return (
        <AnimationWrapper>
            {user && (
                <AnimationFade key={"welcome"}>
                    <TitleText>Welcome {user.username} 🤩</TitleText>
                </AnimationFade>
            )}

            {loading && (
                <AnimationFade key={"loader"}>
                    <TitleTextSkeleton w={"450"} />
                </AnimationFade>
            )}
        </AnimationWrapper>
    );
}
