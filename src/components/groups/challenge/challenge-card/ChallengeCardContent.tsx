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
        <div
            className={`
                flex flex-col justify-between items-baseline h-full w-full space-y-10 sm:space-y-5 sm:justify-center p-5
            `}
        >
            <div className={`flex flex-col w-full`}>
                <ChallengeCardHeader challenge={props.challenge} />
                <div className={`sm:hidden flex flex-col w-full`}>
                    <ChallengeCardDescription description={props.challenge.description} />
                </div>
            </div>

            {!props.challenge.completed && (
                <div className={`sm:hidden`}>
                    <ViewChallengeButton />
                </div>
            )}

            {props.challenge.completed && (
                <div className={`w-full items-end justify-end`}>
                    <ChallengeCompletedBadge />
                </div>
            )}
        </div>
    );
}

export function ChallengeCardContentSkeleton() {
    return (
        <div
            className={`
                flex flex-col justify-between items-baseline h-full w-full space-y-10 sm:space-y-5 sm:justify-center p-5
            `}
        >
            <div className={`flex flex-col w-full`}>
                <ChallengeCardHeaderSkeleton />
                <div className={`sm:hidden`}>
                    <ChallengeCardDescriptionSkeleton />
                </div>
            </div>
            <div className={`sm:hidden`}>
                <ViewChallengeButtonSkeleton />
            </div>
        </div>
    );
}
