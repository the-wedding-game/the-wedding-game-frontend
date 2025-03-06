"use client";

import { useUser } from "@/classes/User/UserHook";
import TitleText, { TitleTextSkeleton } from "@/components/text/TitleText";
import AnimationWrapper from "@/components/framer-motion/AnimationWrapper";
import AnimationFade from "@/components/framer-motion/AnimationFade";
import PointsBar, { PointsBarSkeleton } from "@/components/groups/welcome-bar/PointsBar";

export default function WelcomeBar() {
    const { user, loading } = useUser();

    return (
        <AnimationWrapper>
            {user && (
                <AnimationFade key={"welcome"}>
                    <div className={`flex flex-col space-y-5`}>
                        <TitleText>Welcome {user.username} 🤩</TitleText>
                        <PointsBar />
                    </div>
                </AnimationFade>
            )}

            {loading && (
                <AnimationFade key={"loader"}>
                    <div className={`flex flex-col space-y-5`}>
                        <TitleTextSkeleton w={"300"} />
                        <PointsBarSkeleton />
                    </div>
                </AnimationFade>
            )}
        </AnimationWrapper>
    );
}
