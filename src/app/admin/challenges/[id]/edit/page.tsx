"use client";

import { useUser } from "@/classes/User/UserHook";
import { useParams } from "next/navigation";
import { useChallenge } from "@/classes/Challenge/ChallengeHook";
import AnimationFade from "@/components/framer-motion/AnimationFade";
import AnimationWrapper from "@/components/framer-motion/AnimationWrapper";
import EditChallengeForm, { EditChallengeFormSkeleton } from "@/components/forms/edit-challenge/EditChallengeForm";
import NotFound from "@/components/static/NotFound";

export default function UpdateChallenge() {
    useUser();
    const challengeId = useParams<{ id: string }>().id;
    const { challenge, loading } = useChallenge(parseInt(challengeId));

    return (
        <AnimationWrapper>
            {challenge && (
                <AnimationFade key={"challenges"}>
                    <EditChallengeForm challenge={challenge} />
                </AnimationFade>
            )}
            {loading && (
                <AnimationFade key={"loading"}>
                    <EditChallengeFormSkeleton />
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
