import { useEffect, useState } from "react";
import { Challenge } from "@/classes/Challenge/Challenge";
import { ChallengeFactory } from "@/classes/Challenge/ChallengeFactory";

export function useChallenge(id: number): { challenge: Challenge | null; loading: boolean } {
    const [challenge, setChallenge] = useState<Challenge | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        ChallengeFactory.get(id)
            .then((challenge) => {
                setChallenge(challenge);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return {
        challenge,
        loading,
    };
}
