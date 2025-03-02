import { Challenge } from "@/classes/Challenge/Challenge";
import ChallengeCardHeader, {
    ChallengeCardHeaderSkeleton,
} from "@/components/groups/challenge/challenge-card/ChallengeCardHeader";
import ViewChallengeButton, { ViewChallengeButtonSkeleton } from "@/components/buttons/ViewChallengeButton";
import ChallengeCompletedBadge from "@/components/badges/ChallengeCompletedBadge";
import ChallengeCardDescription, {
    ChallengeCardDescriptionSkeleton,
} from "@/components/groups/challenge/challenge-card/ChallengeCardDescription";

type Props = {
    challenge: Challenge;
};

export default function ChallengeCardContent(props: Props) {
    return (
        <div className={`flex flex-col justify-between items-baseline h-full space-y-10`}>
            <div className={`flex flex-col w-full`}>
                <ChallengeCardHeader challenge={props.challenge} />
                <ChallengeCardDescription description={props.challenge.description} />
            </div>

            {!props.challenge.completed && <ViewChallengeButton challengeId={props.challenge.id} />}

            {props.challenge.completed && <ChallengeCompletedBadge />}
        </div>
    );
}

export function ChallengeCardContentSkeleton() {
    return (
        <div className={`flex flex-col justify-between items-baseline h-full space-y-10`}>
            <div className={`flex flex-col w-full`}>
                <ChallengeCardHeaderSkeleton />
                <ChallengeCardDescriptionSkeleton />
            </div>

            <ViewChallengeButtonSkeleton />
        </div>
    );
}
