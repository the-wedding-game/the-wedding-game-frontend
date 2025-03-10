"use client";

import useLeaderboard from "@/hooks/LeaderboardHook";
import { Card } from "@mantine/core";
import LeaderboardHeader from "@/components/groups/leaderboard/LeaderboardHeader";
import LeaderboardTable from "@/components/groups/leaderboard/LeaderboardTable";

export default function Leaderboard() {
    const { leaderboard, loading } = useLeaderboard();
    return (
        <Card shadow={"md"} padding="lg" radius="md" withBorder>
            <div className={`flex flex-col space-y-5 min-w-[500px]`}>
                <LeaderboardHeader />

                {leaderboard && !loading && <LeaderboardTable leaderboard={leaderboard} />}
            </div>
        </Card>
    );
}
