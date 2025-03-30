import { Button } from "@mantine/core";
import { ReactNode } from "react";
import Link from "next/link";

type Props = {
    text: string;
    link: string;
    icon?: ReactNode;
};
export default function FooterLinkButton(props: Props) {
    return (
        <Link href={props.link} target={"_blank"}>
            <Button variant={"outline"} color={"black"} radius="sm" size={"sm"}>
                <div className={`flex flex-row items-center space-x-2`}>
                    {props.icon && <div className={`w-4`}>{props.icon}</div>}
                    <div>{props.text}</div>
                </div>
            </Button>
        </Link>
    );
}
