import { Badge, Skeleton } from "@mantine/core";
import { ChallengeType } from "@/classes/Challenge/ChallengeTypes";

type Props = {
    type: ChallengeType;
};

export default function ChallengeTypeBadge(props: Props) {
    const color = props.type === "UPLOAD_PHOTO" ? "purple" : "yellow";

    return (
        <Badge color={color} radius="sm" w={100} h={20}>
            {props.type.split("_")[0]}
        </Badge>
    );
}

export function ChallengeTypeBadgeSkeleton() {
    return <Skeleton color={"gray"} radius="sm" w={100} h={20} />;
}
