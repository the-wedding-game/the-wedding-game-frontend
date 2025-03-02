"use client";

import WelcomeBar from "@/components/groups/welcome-bar/WelcomeBar";
import ChallengesListHeader from "@/components/groups/challenge/ChallengesListHeader";
import { useAllChallenges } from "@/hooks/AllChallengesHook";
import ChallengesTabs, { ChallengesTabsSkeleton } from "@/components/groups/challenge/ChallengesTabs";

export default function Home() {
    const { challenges, loading } = useAllChallenges();

    return (
        <div className={`flex flex-col space-y-10 w-full`}>
            <WelcomeBar />

            <div className={`flex flex-col space-y-5`}>
                <ChallengesListHeader />
                {challenges && <ChallengesTabs challenges={challenges} />}
                {loading && <ChallengesTabsSkeleton />}
            </div>
        </div>
    );
}
