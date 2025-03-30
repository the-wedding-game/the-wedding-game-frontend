import MediumText, { MediumTextSkeleton } from "@/components/text/MediumText";
import PointsBadge, { PointsBadgeSkeleton } from "@/components/badges/PointsBadge";
import { Challenge } from "@/classes/Challenge/Challenge";

type Props = {
    readonly challenge: Challenge;
};

export default function ChallengeCardHeader(props: Props) {
    return (
        <div className={`flex flex-row justify-between sm:flex-col sm:space-y-2`}>
            <MediumText weight={600}>{props.challenge.name}</MediumText>
            <PointsBadge points={props.challenge.points} />
        </div>
    );
}

export function ChallengeCardHeaderSkeleton() {
    return (
        <div className={`flex flex-row justify-between sm:flex-col sm:space-y-2`}>
            <MediumTextSkeleton w={"50%"} />
            <PointsBadgeSkeleton />
        </div>
    );
}
