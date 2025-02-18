"use client";

import { useUser } from "@/classes/User/UserHook";
import { Card } from "@mantine/core";
import CreateChallengeForm from "@/components/CreateChallengeForm";

export default function CreateChallenge() {
    useUser();

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className={`max-w-96 w-full`}>
            <CreateChallengeForm />
        </Card>
    );
}
