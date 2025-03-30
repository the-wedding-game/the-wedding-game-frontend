"use client";

import { Card } from "@mantine/core";
import HorizontallyCentered from "@/components/alignment/HorizontallyCentered";
import EditChallengeFormOuter, {
    EditChallengeFormOuterSkeleton,
} from "@/components/forms/edit-challenge/EditChallengeFormOuter";
import { Challenge } from "@/classes/Challenge/Challenge";

type Props = {
    challenge: Challenge;
};

export default function EditChallengeForm(props: Props) {
    return (
        <HorizontallyCentered>
            <Card shadow="sm" padding="lg" radius="md" withBorder className={`max-w-96 w-full`}>
                <EditChallengeFormOuter challenge={props.challenge} />
            </Card>
        </HorizontallyCentered>
    );
}

export function EditChallengeFormSkeleton() {
    return (
        <HorizontallyCentered>
            <Card shadow="sm" padding="lg" radius="md" withBorder className={`max-w-96 w-full`}>
                <EditChallengeFormOuterSkeleton />
            </Card>
        </HorizontallyCentered>
    );
}
