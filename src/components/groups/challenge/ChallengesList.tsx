import { Challenge } from "@/classes/Challenge/Challenge";
import ChallengeCard, { ChallengeCardSkeleton } from "@/components/groups/challenge/challenge-card/ChallengeCard";
import AnimationStagger from "@/components/framer-motion/AnimationStagger";

type Props = {
    challenges: Challenge[];
};

export default function ChallengesList(props: Props) {
    return (
        <div>
            {props.challenges.length !== 0 && (
                <div className={`grid grid-cols-3 gap-8 justify-start`}>
                    {props.challenges.map((challenge, index) => (
                        <AnimationStagger key={index} index={index} length={props.challenges.length}>
                            <ChallengeCard challenge={challenge} />
                        </AnimationStagger>
                    ))}
                </div>
            )}

            {props.challenges.length == 0 && <p className={`text-gray-500`}>No challenges found.</p>}
        </div>
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
