import { Badge, Skeleton } from "@mantine/core";

type Props = {
    readonly points: number;
};

export default function PointsBadge(props: Props) {
    return <Badge color="pink">{props.points}</Badge>;
}

export function PointsBadgeSkeleton() {
    return <Skeleton radius={"xl"} {...dimensions} />;
}

const dimensions = {
    w: 40,
    h: 20,
};
