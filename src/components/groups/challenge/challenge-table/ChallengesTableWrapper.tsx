"use client";

import { Card } from "@mantine/core";
import AnimationFade from "@/components/framer-motion/AnimationFade";
import AnimationWrapper from "@/components/framer-motion/AnimationWrapper";
import ChallengesTableHeader from "@/components/groups/challenge/challenge-table/ChallengesTableHeader";
import { useAllChallenges } from "@/hooks/AllChallengesHook";
import ChallengesTable, {
    ChallengesTableSkeleton,
} from "@/components/groups/challenge/challenge-table/ChallengesTable";

export default function ChallengesTableWrapper() {
    const { challenges, loading, removeChallenge } = useAllChallenges(true);

    return (
        <Card shadow={"md"} padding="lg" radius="md" withBorder className={`min-w-[500px] sm:w-full sm:min-w-full`}>
            <div className={`flex flex-col space-y-5`}>
                <ChallengesTableHeader />

                <AnimationWrapper>
                    {challenges && !loading && (
                        <AnimationFade key={"loaded"}>
                            <ChallengesTable challenges={challenges} removeChallenge={removeChallenge} />
                        </AnimationFade>
                    )}

                    {loading && (
                        <AnimationFade key={"loading"}>
                            <ChallengesTableSkeleton />
                        </AnimationFade>
                    )}
                </AnimationWrapper>
            </div>
        </Card>
    );
}
