import { Skeleton, Switch } from "@mantine/core";
import { useEffect, useState } from "react";
import { ChallengeStatus } from "@/classes/Challenge/ChallengeTypes";
import { UpdateChallengeRequest } from "@/api/challenges/update-challenge/UpdateChallengeRequest";
import { useModal } from "@/components/modals/Modal";
import { Challenge } from "@/classes/Challenge/Challenge";
import { getGenericErrorModal } from "@/constants/modal-templates";

type Props = {
    readonly challenge: Challenge;
};

export default function ChallengeStatusBadge(props: Props) {
    const [checked, setChecked] = useState(props.challenge.status === "ACTIVE");
    const [loading, setLoading] = useState(false);
    const { openModal } = useModal();

    useEffect(() => {
        setLoading(true);
        updateChallengeStatus(props.challenge, checked ? "ACTIVE" : "INACTIVE")
            .catch((error) => {
                openModal(getGenericErrorModal(error));
            })
            .finally(() => setLoading(false));
    }, [checked, openModal, props.challenge]);

    return <Switch size="md" checked={checked} onChange={() => setChecked(!checked)} disabled={loading} />;
}

export function ChallengeStatusBadgeSkeleton() {
    return <Skeleton color={"gray"} radius={"xl"} w={50} h={25} />;
}

async function updateChallengeStatus(challenge: Challenge, status: ChallengeStatus) {
    if (challenge.status === status) {
        return;
    }

    const request = new UpdateChallengeRequest(challenge.id, {
        name: challenge.name,
        description: challenge.description,
        points: challenge.points,
        image: challenge.image,
        type: challenge.type,
        status: status,
    });

    await request.send();
    challenge.status = status;
}
