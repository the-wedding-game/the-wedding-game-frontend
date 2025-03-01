"use client";

import { Card } from "@mantine/core";
import WelcomeHeader from "@/components/groups/welcome/WelcomeHeader";
import HorizontallyCentered from "@/components/alignment/HorizontallyCentered";
import WelcomeInput from "@/components/groups/welcome/WelcomeInput";

export default function Welcome() {
    return (
        <HorizontallyCentered>
            <Card shadow={"md"} padding="lg" radius="md" withBorder>
                <div className={`flex flex-col space-y-5`}>
                    <WelcomeHeader />
                    <WelcomeInput />
                </div>
            </Card>
        </HorizontallyCentered>
    );
}
