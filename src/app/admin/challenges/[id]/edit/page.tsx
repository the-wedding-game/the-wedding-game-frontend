"use client";

import { useUser } from "@/classes/User/UserHook";
import { Card } from "@mantine/core";
import HorizontallyCentered from "@/components/alignment/HorizontallyCentered";
import { useParams } from "next/navigation";
import EditChallengeFormOuter, {
    EditChallengeFormOuterSkeleton,
} from "@/components/forms/edit-challenge/EditChallengeFormOuter";
import { useChallenge } from "@/classes/Challenge/ChallengeHook";

export default function CreateChallenge() {
    useUser();
    const challengeId = useParams<{ id: string }>().id;
    const { challenge, loading } = useChallenge(parseInt(challengeId));

    return (
        <>
            {challenge && (
                <HorizontallyCentered>
                    <Card shadow="sm" padding="lg" radius="md" withBorder className={`max-w-96 w-full`}>
                        <EditChallengeFormOuter challenge={challenge} />
                    </Card>
                </HorizontallyCentered>
            )}

            {loading && (
                <HorizontallyCentered>
                    <Card shadow="sm" padding="lg" radius="md" withBorder className={`max-w-96 w-full`}>
                        <EditChallengeFormOuterSkeleton />
                    </Card>
                </HorizontallyCentered>
            )}
        </>
    );
}
