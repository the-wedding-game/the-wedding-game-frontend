"use client";

import WelcomeBar from "@/components/groups/welcome-bar/WelcomeBar";
import ChallengesListHeader from "@/components/groups/challenge/ChallengesListHeader";
import { useAllChallenges } from "@/hooks/AllChallengesHook";
import ChallengesTabs, { ChallengesTabsSkeleton } from "@/components/groups/challenge/ChallengesTabs";
import AnimationWrapper from "@/components/framer-motion/AnimationWrapper";
import AnimationFade from "@/components/framer-motion/AnimationFade";

export default function Home() {
    const { challenges, loading } = useAllChallenges(false);

    return (
        <div className={`flex flex-col space-y-10 w-full`}>
            <WelcomeBar />

            <div className={`flex flex-col space-y-5`}>
                <AnimationFade>
                    <ChallengesListHeader />
                </AnimationFade>

                <AnimationWrapper>
                    {challenges && (
                        <AnimationFade key={"challenges"}>
                            <ChallengesTabs challenges={challenges} />
                        </AnimationFade>
                    )}

                    {loading && (
                        <AnimationFade key={"loader"}>
                            <ChallengesTabsSkeleton />
                        </AnimationFade>
                    )}
                </AnimationWrapper>
            </div>
        </div>
    );
}
