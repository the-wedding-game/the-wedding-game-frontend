import { Skeleton } from "@mantine/core";
import LinkButton from "@/components/buttons/LinkButton";
import EditIcon from "@/components/icons/EditIcon";
import { Challenge } from "@/classes/Challenge/Challenge";

type Props = {
    readonly challenge: Challenge;
};

export default function EditChallengeButton(props: Props) {
    return (
        <LinkButton color={"orange"} icon={<EditIcon />} link={`/admin/challenges/${props.challenge.id}/edit`}>
            Edit
        </LinkButton>
    );
}

export function EditChallengeButtonSkeleton() {
    return <Skeleton radius={"sm"} {...dimensions} />;
}

const dimensions = {
    w: 140,
    h: 40,
};
