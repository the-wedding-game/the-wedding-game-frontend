import { Challenge } from "@/classes/Challenge/Challenge";
import ChallengeCard, { ChallengeCardSkeleton } from "@/components/groups/challenge/challenge-card/ChallengeCard";
import AnimationStagger from "@/components/framer-motion/AnimationStagger";

type Props = {
    readonly challenges: Challenge[];
};

export default function ChallengesList(props: Props) {
    return (
        <>
            {props.challenges.length !== 0 && (
                <div className={`grid grid-cols-3 sm:grid-cols-1 gap-8 sm:gap-4 justify-start`}>
                    {props.challenges.map((challenge, index) => (
                        <AnimationStagger key={challenge.id} index={index}>
                            <ChallengeCard challenge={challenge} />
                        </AnimationStagger>
                    ))}
                </div>
            )}

            {props.challenges.length == 0 && <p className={`text-gray-500`}>No challenges found.</p>}
        </>
    );
}

export function ChallengesListSkeleton() {
    return (
        <div className={`grid grid-cols-3 sm:grid-cols-1 gap-8 sm:gap-4 justify-start`}>
            <ChallengeCardSkeleton />
            <ChallengeCardSkeleton />
            <ChallengeCardSkeleton />
            <ChallengeCardSkeleton />
            <ChallengeCardSkeleton />
        </div>
    );
}
