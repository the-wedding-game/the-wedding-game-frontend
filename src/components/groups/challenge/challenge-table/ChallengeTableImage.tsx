import { AspectRatio, Image, Skeleton } from "@mantine/core";
import { Challenge } from "@/classes/Challenge/Challenge";

type Props = {
    readonly challenge: Challenge;
};

export default function ChallengeTableImage(props: Props) {
    return (
        <div className={`w-20 sm:w-14`}>
            <AspectRatio ratio={1} mx="auto">
                <Image src={props.challenge.image} alt={props.challenge.name} radius="md" height={500} fit={"cover"} />
            </AspectRatio>
        </div>
    );
}

export function ChallengeTableImageSkeleton() {
    return (
        <div className={`w-20 sm:w-14`}>
            <AspectRatio ratio={1} mx="auto">
                <Skeleton radius="md" />
            </AspectRatio>
        </div>
    );
}
