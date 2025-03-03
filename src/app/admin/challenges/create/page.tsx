"use client";

import { useUser } from "@/classes/User/UserHook";
import { Card } from "@mantine/core";
import CreateChallengeFormOuter from "@/components/forms/create-challenge/CreateChallengeFormOuter";
import HorizontallyCentered from "@/components/alignment/HorizontallyCentered";

export default function CreateChallenge() {
    useUser();

    return (
        <HorizontallyCentered>
            <Card shadow="sm" padding="lg" radius="md" withBorder className={`max-w-96 w-full`}>
                <CreateChallengeFormOuter />
            </Card>
        </HorizontallyCentered>
    );
}
