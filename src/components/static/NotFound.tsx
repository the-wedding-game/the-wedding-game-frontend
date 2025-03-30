"use client";

import HorizontallyCentered from "@/components/alignment/HorizontallyCentered";
import { Card } from "@mantine/core";
import ErrorIcon from "@/components/icons/ErrorIcon";
import TitleText from "@/components/text/TitleText";
import SmallText from "@/components/text/SmallText";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pagePath = usePathname();

    return (
        <HorizontallyCentered>
            <Card shadow={"md"} className={`flex flex-col space-y-5`}>
                <div className={`flex flex-row items-start space-x-2`}>
                    <ErrorIcon />
                    <div className={`flex flex-col items-start space-y-5`}>
                        <div className={`flex flex-col items-start space-y-2`}>
                            <TitleText>Not found</TitleText>
                            <div>Unfortunately, we are unable to find the page you are looking for.</div>
                            <SmallText>{pagePath}</SmallText>
                        </div>
                    </div>
                </div>
            </Card>
        </HorizontallyCentered>
    );
}
