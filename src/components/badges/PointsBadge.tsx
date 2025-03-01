import { Badge } from "@mantine/core";

type Props = {
    points: number;
};

export default function PointsBadge(props: Props) {
    return <Badge color="pink">{props.points}</Badge>;
}
