"use client";

import useLeaderboard from "@/hooks/LeaderboardHook";
import { Card } from "@mantine/core";
import LeaderboardHeader from "@/components/groups/leaderboard/LeaderboardHeader";
import LeaderboardTable, { LeaderboardTableSkeleton } from "@/components/groups/leaderboard/LeaderboardTable";
import AnimationFade from "@/components/framer-motion/AnimationFade";
import AnimationWrapper from "@/components/framer-motion/AnimationWrapper";

export default function Leaderboard() {
    const { leaderboard, loading } = useLeaderboard();

    return (
        <Card shadow={"md"} padding="lg" radius="md" withBorder className={`min-w-[500px] sm:w-full sm:min-w-full`}>
            <div className={`flex flex-col space-y-5`}>
                <LeaderboardHeader />

                <AnimationWrapper>
                    {leaderboard && !loading && (
                        <AnimationFade key={"loaded"}>
                            <LeaderboardTable leaderboard={leaderboard} />
                        </AnimationFade>
                    )}

                    {loading && (
                        <AnimationFade key={"loading"}>
                            <LeaderboardTableSkeleton />
                        </AnimationFade>
                    )}
                </AnimationWrapper>
            </div>
        </Card>
    );
}
