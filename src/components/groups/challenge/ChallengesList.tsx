import { Challenge } from "@/classes/Challenge/Challenge";
import ChallengeCard, { ChallengeCardSkeleton } from "@/components/groups/challenge/challenge-card/ChallengeCard";

type Props = {
    challenges: Challenge[];
};

export default function ChallengesList(props: Props) {
    return (
        <>
            {props.challenges.length !== 0 && (
                <div className={`grid grid-cols-3 gap-8 justify-start`}>
                    {props.challenges.map((challenge, index) => (
                        <ChallengeCard key={index} challenge={challenge} />
                    ))}
                </div>
            )}

            {props.challenges.length == 0 && <p className={`text-gray-500`}>No challenges found.</p>}
        </>
    );
}

export function ChallengesListSkeleton() {
    return (
        <div className={`grid grid-cols-3 gap-8 justify-start`}>
            <ChallengeCardSkeleton />
            <ChallengeCardSkeleton />
            <ChallengeCardSkeleton />
            <ChallengeCardSkeleton />
            <ChallengeCardSkeleton />
        </div>
    );
}
