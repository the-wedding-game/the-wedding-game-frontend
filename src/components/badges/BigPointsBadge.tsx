import { Badge, Skeleton } from "@mantine/core";
import MediumText from "@/components/text/MediumText";

type Props = {
    readonly points: number;
};

export default function BigPointsBadge(props: Props) {
    return (
        <Badge color="pink" radius={"sm"} {...dimensions}>
            <MediumText weight={500}>{props.points} points</MediumText>
        </Badge>
    );
}

export function BigPointsBadgeSkeleton() {
    return <Skeleton radius={"sm"} {...dimensions} />;
}

const dimensions = {
    w: 130,
    h: 40,
};
