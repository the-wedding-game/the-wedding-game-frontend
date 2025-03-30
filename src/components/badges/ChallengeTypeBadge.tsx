import { Badge, Skeleton } from "@mantine/core";
import { ChallengeType } from "@/classes/Challenge/ChallengeTypes";

type Props = {
    readonly type: ChallengeType;
};

export default function ChallengeTypeBadge(props: Props) {
    const color = props.type === "UPLOAD_PHOTO" ? "purple" : "yellow";
    const text = props.type === "UPLOAD_PHOTO" ? "PHOTO" : "ANSWER";

    return (
        <Badge color={color} radius="sm" w={100} h={20}>
            {text}
        </Badge>
    );
}

export function ChallengeTypeBadgeSkeleton() {
    return <Skeleton color={"gray"} radius="sm" w={100} h={20} />;
}
