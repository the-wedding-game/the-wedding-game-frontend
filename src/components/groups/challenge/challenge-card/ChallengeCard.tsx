import { Challenge } from "@/classes/Challenge/Challenge";
import { Card } from "@mantine/core";
import ChallengeCardContent, {
    ChallengeCardContentSkeleton,
} from "@/components/groups/challenge/challenge-card/ChallengeCardContent";
import ChallengeCardImage, {
    ChallengeCardImageSkeleton,
} from "@/components/groups/challenge/challenge-card/ChallengeCardImage";

type Props = {
    challenge: Challenge;
};

export default function ChallengeCard(props: Props) {
    const challenge = props.challenge;

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className={`max-w-96 space-y-5`}>
            <ChallengeCardImage challenge={challenge} />
            <ChallengeCardContent challenge={challenge} />
        </Card>
    );
}

export function ChallengeCardSkeleton() {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className={`max-w-96 space-y-5`}>
            <ChallengeCardImageSkeleton />
            <ChallengeCardContentSkeleton />
        </Card>
    );
}
