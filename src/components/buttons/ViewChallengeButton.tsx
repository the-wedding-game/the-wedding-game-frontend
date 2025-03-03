import { Button, Skeleton } from "@mantine/core";

export default function ViewChallengeButton() {
    return (
        <Button color="blue" fullWidth radius="sm" {...dimensions}>
            View challenge
        </Button>
    );
}

export function ViewChallengeButtonSkeleton() {
    return <Skeleton radius={"sm"} {...dimensions} />;
}

const dimensions = {
    w: 140,
    h: 40,
};
