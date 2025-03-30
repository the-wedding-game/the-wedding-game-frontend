import { Challenge } from "@/classes/Challenge/Challenge";
import React from "react";
import HeadingText, { HeadingTextSkeleton } from "@/components/text/HeadingText";
import BigPointsBadge, { BigPointsBadgeSkeleton } from "@/components/badges/BigPointsBadge";
import EditChallengeButton from "@/components/buttons/EditChallengeButton";
import DeleteChallengeButton from "@/components/buttons/DeleteChallengeButton";

type Props = {
    readonly challenge: Challenge;
};

export default function ChallengePageHeader(props: Props) {
    return (
        <div className={`flex flex-row items-start justify-between w-full space-y-3`}>
            <div className={`flex flex-col space-y-2`}>
                <HeadingText>{props.challenge.name}</HeadingText>

                <div className={`flex flex-row items-center space-x-2`}>
                    <BigPointsBadge points={props.challenge.points} />
                </div>
            </div>

            <div className={`flex flex-row sm:flex-col items-center space-x-2 sm:space-x-0 sm:space-y-2`}>
                <EditChallengeButton challenge={props.challenge} />
                <DeleteChallengeButton />
            </div>
        </div>
    );
}

export function ChallengePageHeaderSkeleton() {
    return (
        <div className={`flex flex-col space-y-2`}>
            <HeadingTextSkeleton w={"300"} />

            <div className={`flex flex-row items-center space-x-2`}>
                <BigPointsBadgeSkeleton />
            </div>
        </div>
    );
}
