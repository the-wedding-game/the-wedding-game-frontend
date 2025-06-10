import { Button, Loader, MantineColor, Skeleton } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
    readonly color: MantineColor;
    readonly children: string;
    readonly icon?: ReactNode;
    readonly onClick?: () => void;
    readonly loading?: boolean;
};

export default function ActionButton(props: Props) {
    return (
        <Button
            variant={"outline"}
            color={props.color}
            size={"xs"}
            fullWidth
            radius="sm"
            {...dimensions}
            onClick={props.onClick}
        >
            <div className={`flex flex-row items-center space-x-2`}>
                {props.loading && <Loader size={"xs"} color={props.color} />}
                {!props.loading && (
                    <>
                        {props.icon && <div className={`w-4`}>{props.icon}</div>}
                        <div>{props.children}</div>
                    </>
                )}
            </div>
        </Button>
    );
}

export function LinkButtonSkeleton() {
    return <Skeleton radius={"sm"} {...dimensions} />;
}

const dimensions = {
    w: 90,
    h: 30,
};
