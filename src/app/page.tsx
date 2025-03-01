"use client";

import WelcomeBar from "@/components/groups/welcome-bar/WelcomeBar";
import ChallengesList from "@/components/groups/challenge/ChallengesList";
import ChallengesListHeader from "@/components/groups/challenge/ChallengesListHeader";

export default function Home() {
    return (
        <div className={`flex flex-col space-y-10 w-full`}>
            <WelcomeBar />

            <div className={`flex flex-col space-y-5`}>
                <ChallengesListHeader />
                <ChallengesList />
            </div>
        </div>
    );
}
