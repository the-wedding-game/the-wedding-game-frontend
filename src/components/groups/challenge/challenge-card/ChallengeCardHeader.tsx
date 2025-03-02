import MediumText, { MediumTextSkeleton } from "@/components/text/MediumText";
import PointsBadge, { PointsBadgeSkeleton } from "@/components/badges/PointsBadge";
import { Challenge } from "@/classes/Challenge/Challenge";

type Props = {
    challenge: Challenge;
};

export default function ChallengeCardHeader(props: Props) {
    return (
        <div className={`flex flex-row justify-between`}>
            <MediumText>{props.challenge.name}</MediumText>
            <PointsBadge points={props.challenge.points} />
        </div>
    );
}

export function ChallengeCardHeaderSkeleton() {
    return (
        <div className={`flex flex-row justify-between`}>
            <MediumTextSkeleton w={"50%"} />
            <PointsBadgeSkeleton />
        </div>
    );
}
