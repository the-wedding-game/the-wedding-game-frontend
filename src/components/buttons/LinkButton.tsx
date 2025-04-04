import { Button, MantineColor, Skeleton } from "@mantine/core";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    readonly color: MantineColor;
    readonly children: string;
    readonly link: string;
    readonly icon?: ReactNode;
};

export default function LinkButton(props: Props) {
    return (
        <Link href={props.link}>
            <Button variant={"outline"} color={props.color} size={"xs"} fullWidth radius="sm" {...dimensions}>
                <div className={`flex flex-row items-center space-x-2`}>
                    {props.icon && <div className={`w-4`}>{props.icon}</div>}
                    <div>{props.children}</div>
                </div>
            </Button>
        </Link>
    );
}

export function LinkButtonSkeleton() {
    return <Skeleton radius={"sm"} {...dimensions} />;
}

const dimensions = {
    w: 90,
    h: 30,
};
