import { Button, Skeleton } from "@mantine/core";

type Props = {
    challengeId: number;
};

export default function ViewChallengeButton(props: Props) {
    return (
        <a href={`/challenge/${props.challengeId}`}>
            <Button color="blue" fullWidth radius="sm" {...dimensions}>
                View challenge
            </Button>
        </a>
    );
}

export function ViewChallengeButtonSkeleton() {
    return <Skeleton radius={"sm"} {...dimensions} />;
}

const dimensions = {
    w: 140,
    h: 40,
};
