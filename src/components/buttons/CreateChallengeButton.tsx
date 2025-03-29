import { Button, Skeleton } from "@mantine/core";
import CreateIcon from "@/components/icons/CreateIcon";

export default function CreateChallengeButton() {
    return (
        <a href={`/admin/challenges/create`}>
            <Button color="blue" fullWidth radius="sm" {...dimensions}>
                <div className={`flex flex-row items-center space-x-2`}>
                    <div className={`w-6`}>
                        <CreateIcon />
                    </div>
                    <div>Create New Challenge</div>
                </div>
            </Button>
        </a>
    );
}

export function LinkButtonSkeleton() {
    return <Skeleton radius={"sm"} {...dimensions} />;
}

const dimensions = {
    w: 220,
    h: 40,
};
