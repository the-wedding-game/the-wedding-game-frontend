import { Badge, Skeleton } from "@mantine/core";

type Props = {
    points: number;
};

export default function PointsBadge(props: Props) {
    return (
        <Badge color="pink" {...dimensions}>
            {props.points}
        </Badge>
    );
}

export function PointsBadgeSkeleton() {
    return <Skeleton radius={"xl"} {...dimensions} />;
}

const dimensions = {
    w: 35,
    h: 20,
};
