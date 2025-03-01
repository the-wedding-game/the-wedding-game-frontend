import { Challenge } from "@/classes/Challenge/Challenge";
import ChallengeHeader from "@/components/groups/ChallengeHeader";
import ViewChallengeButton from "@/components/buttons/ViewChallengeButton";
import ChallengeCompletedBadge from "@/components/badges/ChallengeCompletedBadge";
import ChallengeDescription from "@/components/groups/ChallengeDescription";

type Props = {
    challenge: Challenge;
};

export default function ChallengeCardContent(props: Props) {
    return (
        <div className={`flex flex-col justify-between items-baseline h-full space-y-5`}>
            <div className={`flex flex-col w-full`}>
                <ChallengeHeader challenge={props.challenge} />
                <ChallengeDescription description={props.challenge.description} />
            </div>

            {!props.challenge.completed && <ViewChallengeButton challengeId={props.challenge.id} />}

            {props.challenge.completed && <ChallengeCompletedBadge />}
        </div>
    );
}
