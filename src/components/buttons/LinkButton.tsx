import { Button, MantineColor, Skeleton } from "@mantine/core";

type Props = {
    color: MantineColor;
    children: string;
    link: string;
};

export default function LinkButton(props: Props) {
    return (
        <a href={props.link}>
            <Button variant={"outline"} color={props.color} size={"xs"} fullWidth radius="sm" {...dimensions}>
                {props.children}
            </Button>
        </a>
    );
}

export function LinkButtonSkeleton() {
    return <Skeleton radius={"sm"} {...dimensions} />;
}

const dimensions = {
    w: 70,
    h: 30,
};
