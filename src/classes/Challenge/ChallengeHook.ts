import {useEffect, useState} from "react";
import {Challenge} from "@/classes/Challenge/Challenge";
import {ChallengeFactory} from "@/classes/Challenge/ChallengeFactory";

export function useChallenge(id: number): Challenge | null {
    const [challenge, setChallenge] = useState<Challenge | null>(null);
    
    useEffect(() => {
        ChallengeFactory.get(id)
        .then((challenge) => {
            setChallenge(challenge);
        })
    }, [id]);
    
    return challenge;
}