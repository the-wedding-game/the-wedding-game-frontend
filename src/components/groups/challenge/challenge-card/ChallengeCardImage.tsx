import { AspectRatio, Image, Skeleton } from "@mantine/core";
import { Challenge } from "@/classes/Challenge/Challenge";

type Props = {
    readonly challenge: Challenge;
};

export default function ChallengeCardImage(props: Props) {
    return (
        <div className={`h-full md:-m-5`}>
            <AspectRatio ratio={1} mx="auto">
                <Image src={props.challenge.image} alt={props.challenge.name} radius="md" height={200} fit={"cover"} />
            </AspectRatio>
        </div>
    );
}

export function ChallengeCardImageSkeleton() {
    return (
        <div className={`h-full md:-m-5`}>
            <AspectRatio ratio={1} mx="auto">
                <Skeleton radius="md" />
            </AspectRatio>
        </div>
    );
}
