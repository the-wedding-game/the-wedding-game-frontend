import { Button, MantineColor, Skeleton } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
    color: MantineColor;
    children: string;
    link: string;
    icon?: ReactNode;
};

export default function LinkButton(props: Props) {
    return (
        <a href={props.link}>
            <Button variant={"outline"} color={props.color} size={"xs"} fullWidth radius="sm" {...dimensions}>
                <div className={`flex flex-row items-center space-x-2`}>
                    {props.icon && <div className={`w-4`}>{props.icon}</div>}
                    <div>{props.children}</div>
                </div>
            </Button>
        </a>
    );
}

export function LinkButtonSkeleton() {
    return <Skeleton radius={"sm"} {...dimensions} />;
}

const dimensions = {
    w: 90,
    h: 30,
};
