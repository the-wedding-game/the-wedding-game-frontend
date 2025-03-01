import { useEffect, useState } from "react";
import { Challenge } from "@/classes/Challenge/Challenge";
import { ChallengeFactory } from "@/classes/Challenge/ChallengeFactory";

export function useAllChallenges(): Challenge[] | null {
    const [challenges, setChallenges] = useState<Challenge[] | null>(null);

    useEffect(() => {
        ChallengeFactory.getAll().then(async (challenge) => {
            setChallenges(challenge);
        });
    }, []);

    return challenges;
}
