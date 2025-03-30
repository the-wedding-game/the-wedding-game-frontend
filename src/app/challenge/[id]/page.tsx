"use client";

import { useUser } from "@/classes/User/UserHook";
import { useChallenge } from "@/classes/Challenge/ChallengeHook";
import { useParams } from "next/navigation";
import React from "react";
import AnimationWrapper from "@/components/framer-motion/AnimationWrapper";
import AnimationFade from "@/components/framer-motion/AnimationFade";
import ChallengePage, { ChallengePageSkeleton } from "@/components/groups/challenge/challenge-page/ChallengePage";
import NotFound from "@/components/static/NotFound";

export default function Challenge() {
    useUser();

    const id = useParams<{ id: string }>().id;
    const { challenge, loading } = useChallenge(Number(id));

    return (
        <AnimationWrapper>
            {challenge && (
                <AnimationFade key={"challenges"}>
                    <ChallengePage challenge={challenge} />
                </AnimationFade>
            )}

            {loading && (
                <AnimationFade key={"loader"}>
                    <ChallengePageSkeleton />
                </AnimationFade>
            )}

            {!loading && !challenge && (
                <AnimationFade key={"not-found"}>
                    <NotFound />
                </AnimationFade>
            )}
        </AnimationWrapper>
    );
}
