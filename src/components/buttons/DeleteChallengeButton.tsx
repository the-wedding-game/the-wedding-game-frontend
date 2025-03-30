import { Skeleton } from "@mantine/core";
import LinkButton from "@/components/buttons/LinkButton";
import DeleteIcon from "@/components/icons/DeleteIcon";

export default function DeleteChallengeButton() {
    return (
        <LinkButton color={"red"} icon={<DeleteIcon />} link={`#`}>
            Delete
        </LinkButton>
    );
}

export function DeleteChallengeButtonSkeleton() {
    return <Skeleton radius={"sm"} {...dimensions} />;
}

const dimensions = {
    w: 140,
    h: 40,
};
