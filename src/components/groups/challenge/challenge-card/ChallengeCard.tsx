import { Challenge } from "@/classes/Challenge/Challenge";
import { Card } from "@mantine/core";
import ChallengeCardContent, {
    ChallengeCardContentSkeleton,
} from "@/components/groups/challenge/challenge-card/ChallengeCardContent";
import ChallengeCardImage, {
    ChallengeCardImageSkeleton,
} from "@/components/groups/challenge/challenge-card/ChallengeCardImage";
import Link from "next/link";

type Props = {
    readonly challenge: Challenge;
};

export default function ChallengeCard(props: Props) {
    const challenge = props.challenge;

    return (
        <Card shadow="sm" padding="0" radius="md" withBorder className={`max-w-96 w-full`}>
            <Link href={`/challenge/${props.challenge.id}`}>
                <div className={`flex flex-col sm:flex-row sm:space-x-2`}>
                    <div className={`sm:w-1/2 h-full`}>
                        <ChallengeCardImage challenge={challenge} />
                    </div>
                    <ChallengeCardContent challenge={challenge} />
                </div>
            </Link>
        </Card>
    );
}

export function ChallengeCardSkeleton() {
    return (
        <Card shadow="sm" padding="0" radius="md" withBorder className={`max-w-96 w-full`}>
            <div className={`flex flex-col sm:flex-row sm:space-x-2`}>
                <div className={`sm:w-1/2 h-full`}>
                    <ChallengeCardImageSkeleton />
                </div>
                <ChallengeCardContentSkeleton />
            </div>
        </Card>
    );
}
