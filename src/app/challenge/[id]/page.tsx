"use client";

import { useUser } from "@/classes/User/UserHook";
import { useChallenge } from "@/classes/Challenge/ChallengeHook";
import { useParams } from "next/navigation";
import React from "react";
import ChallengePageHeader, {
    ChallengePageHeaderSkeleton,
} from "@/components/groups/challenge/challenge-page/ChallengePageHeader";
import ChallengePageImage, {
    ChallengePageImageSkeleton,
} from "@/components/groups/challenge/challenge-page/ChallengePageImage";
import ChallengePageDescription, {
    ChallengePageDescriptionSkeleton,
} from "@/components/groups/challenge/challenge-page/ChallengeCardDescription";
import ChallengeCompletedBadge from "@/components/badges/ChallengeCompletedBadge";
import ChallengeSubmissionGroup, {
    ChallengeSubmissionGroupSkeleton,
} from "@/components/groups/challenge/challenge-page/ChallengeSubmissionGroup";

export default function Challenge() {
    useUser();

    const id = useParams<{ id: string }>().id;
    const { challenge, loading } = useChallenge(Number(id));

    return (
        <>
            {challenge && (
                <div className={`flex flex-col w-full space-y-5`}>
                    <ChallengePageHeader challenge={challenge} />

                    <div className={`flex flex-row space-x-5`}>
                        <ChallengePageImage challenge={challenge} />

                        <div className={`flex flex-col w-96 justify-between`}>
                            <ChallengePageDescription description={challenge.description} />

                            {challenge.completed && <ChallengeCompletedBadge />}

                            {!challenge.completed && <ChallengeSubmissionGroup challenge={challenge} />}
                        </div>
                    </div>
                </div>
            )}

            {loading && (
                <div className={`flex flex-col w-full space-y-5`}>
                    <ChallengePageHeaderSkeleton />

                    <div className={`flex flex-row space-x-5`}>
                        <ChallengePageImageSkeleton />

                        <div className={`flex flex-col w-96 justify-between`}>
                            <ChallengePageDescriptionSkeleton />
                            <ChallengeSubmissionGroupSkeleton />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
