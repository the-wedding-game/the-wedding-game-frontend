import { Button } from "@mantine/core";

type Props = {
    text: string;
    link: string;
};
export default function HeaderLinkButton(props: Props) {
    return (
        <a href={props.link}>
            <Button variant={"outline"} color={"white"} radius="sm" size={"sm"}>
                {props.text}
            </Button>
        </a>
    );
}
