import { CardSection, Image, Skeleton } from "@mantine/core";
import { Challenge } from "@/classes/Challenge/Challenge";

type Props = {
    challenge: Challenge;
};

export default function ChallengeCardImage(props: Props) {
    return (
        <CardSection>
            <Image
                src={props.challenge.image}
                alt={props.challenge.name}
                radius="md"
                height={200}
                width={200}
                {...dimensions}
            />
        </CardSection>
    );
}

export function ChallengeCardImageSkeleton() {
    return (
        <CardSection>
            <Skeleton {...dimensions} radius="md" />
        </CardSection>
    );
}

const dimensions = {
    w: 384,
    h: 384,
};
