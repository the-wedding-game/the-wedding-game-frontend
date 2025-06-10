import { Skeleton } from "@mantine/core";
import DeleteIcon from "@/components/icons/DeleteIcon";
import { Challenge } from "@/classes/Challenge/Challenge";
import { useState } from "react";
import { useModal } from "@/components/modals/Modal";
import { getErrorModal, getSuccessModal } from "@/constants/modal-templates";
import ActionButton from "@/components/buttons/ActionButton";

type Props = {
    readonly challenge: Challenge;
    readonly callback?: () => void;
};

export default function DeleteChallengeButton(props: Props) {
    const [loading, setLoading] = useState(false);
    const { openModal } = useModal();

    function deleteChallenge() {
        setLoading(true);
        props.challenge
            .delete()
            .then(() => {
                openModal(getSuccessModal("Challenge deleted successfully!"));
                if (props.callback) props.callback();
            })
            .catch((err) => {
                openModal(getErrorModal("An unexpected error occurred while deleting this challenge.", err));
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <ActionButton color={"red"} icon={<DeleteIcon />} onClick={() => deleteChallenge()} loading={loading}>
            Delete
        </ActionButton>
    );
}

export function DeleteChallengeButtonSkeleton() {
    return <Skeleton radius={"sm"} {...dimensions} />;
}

const dimensions = {
    w: 140,
    h: 40,
};
