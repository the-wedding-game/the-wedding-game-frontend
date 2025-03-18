import { Skeleton, Switch } from "@mantine/core";
import { useState } from "react";
import { ChallengeStatus } from "@/classes/Challenge/ChallengeTypes";

type Props = {
    status: ChallengeStatus;
};

export default function ChallengeStatusBadge(props: Props) {
    const [checked, setChecked] = useState(props.status === "ACTIVE");

    return <Switch size="md" checked={checked} onChange={() => setChecked(!checked)} />;
}

export function ChallengeStatusBadgeSkeleton() {
    return <Skeleton color={"gray"} radius={"xl"} w={50} h={25} />;
}
