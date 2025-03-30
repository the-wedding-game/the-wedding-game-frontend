import { Button, Skeleton } from "@mantine/core";
import CreateIcon from "@/components/icons/CreateIcon";
import Link from "next/link";

export default function CreateChallengeButton() {
    return (
        <Link href={`/admin/challenges/create`}>
            <Button color="blue" fullWidth radius="sm" {...dimensions}>
                <div className={`flex flex-row items-center space-x-2`}>
                    <div className={`w-6`}>
                        <CreateIcon />
                    </div>
                    <div>Create New Challenge</div>
                </div>
            </Button>
        </Link>
    );
}

export function LinkButtonSkeleton() {
    return <Skeleton radius={"sm"} {...dimensions} />;
}

const dimensions = {
    w: 220,
    h: 40,
};
