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
import AnimationWrapper from "@/components/framer-motion/AnimationWrapper";
import AnimationFade from "@/components/framer-motion/AnimationFade";

export default function Challenge() {
    useUser();

    const id = useParams<{ id: string }>().id;
    const { challenge, loading } = useChallenge(Number(id));

    return (
        <AnimationWrapper>
            {challenge && (
                <AnimationFade key={"challenges"}>
                    <div className={`flex flex-col w-full space-y-5`}>
                        <ChallengePageHeader challenge={challenge} />

                        <div className={`flex flex-row sm:flex-col space-x-5 sm:space-y-2 sm:space-x-0`}>
                            <ChallengePageImage challenge={challenge} />

                            <div className={`flex flex-col w-96 justify-between p-2 sm:space-y-5`}>
                                <ChallengePageDescription description={challenge.description} />

                                {challenge.completed && <ChallengeCompletedBadge />}

                                {!challenge.completed && <ChallengeSubmissionGroup challenge={challenge} />}
                            </div>
                        </div>
                    </div>
                </AnimationFade>
            )}

            {loading && (
                <AnimationFade key={"loader"}>
                    <div className={`flex flex-col w-full space-y-5`}>
                        <ChallengePageHeaderSkeleton />

                        <div className={`flex flex-row sm:flex-col space-x-5 sm:space-y-2 sm:space-x-0`}>
                            <ChallengePageImageSkeleton />

                            <div className={`flex flex-col w-96 justify-between p-2 sm:space-y-5`}>
                                <ChallengePageDescriptionSkeleton />
                                <ChallengeSubmissionGroupSkeleton />
                            </div>
                        </div>
                    </div>
                </AnimationFade>
            )}
        </AnimationWrapper>
    );
}
