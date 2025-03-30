import { Button } from "@mantine/core";
import Link from "next/link";

type Props = {
    text: string;
    link: string;
};
export default function HeaderLinkButton(props: Props) {
    return (
        <Link href={props.link}>
            <Button variant={"outline"} color={"white"} radius="sm" size={"sm"}>
                {props.text}
            </Button>
        </Link>
    );
}
