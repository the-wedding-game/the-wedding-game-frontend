"use client";

import { Loader } from "@mantine/core";
import { useAllChallenges } from "@/hooks/AllChallengesHook";
import ChallengeCard from "@/components/cards/ChallengeCard";

export default function ChallengesList() {
    const challenges = useAllChallenges();

    return (
        <>
            {challenges !== null && challenges.length !== 0 && (
                <div className={`grid grid-cols-3 gap-8 justify-start`}>
                    {challenges.map((challenge, index) => (
                        <ChallengeCard key={index} challenge={challenge} />
                    ))}
                </div>
            )}

            {challenges == null && <Loader />}

            {challenges !== null && challenges.length > 0 && <p className={`text-gray-500`}>No challenges found.</p>}
        </>
    );
}
