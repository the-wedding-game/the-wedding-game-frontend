import { useEffect, useState } from "react";
import { Challenge } from "@/classes/Challenge/Challenge";
import { ChallengeFactory } from "@/classes/Challenge/ChallengeFactory";

export function useAllChallenges(includeInactive: boolean): { challenges: Challenge[] | null; loading: boolean } {
    const [challenges, setChallenges] = useState<Challenge[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        ChallengeFactory.getAll(includeInactive)
            .then(async (challenge) => {
                setChallenges(challenge);
            })
            .finally(() => setLoading(false));
    }, []);

    return {
        challenges,
        loading,
    };
}
