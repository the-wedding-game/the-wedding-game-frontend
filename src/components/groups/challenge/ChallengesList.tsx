import { Loader } from "@mantine/core";
import { Challenge } from "@/classes/Challenge/Challenge";
import ChallengeCard from "@/components/cards/ChallengeCard";

type Props = {
    challenges: Challenge[] | undefined;
};

export default function ChallengesList(props: Props) {
    return (
        <div>
            {props.challenges && props.challenges.length !== 0 && (
                <div className={`grid grid-cols-3 gap-8 justify-start`}>
                    {props.challenges.map((challenge, index) => (
                        <ChallengeCard key={index} challenge={challenge} />
                    ))}
                </div>
            )}

            {!props.challenges && <Loader />}

            {props.challenges && props.challenges.length == 0 && (
                <p className={`text-gray-500`}>No challenges found.</p>
            )}
        </div>
    );
}
