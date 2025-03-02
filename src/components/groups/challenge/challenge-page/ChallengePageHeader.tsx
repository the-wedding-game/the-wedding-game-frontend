import { Challenge } from "@/classes/Challenge/Challenge";
import React from "react";
import HeadingText, { HeadingTextSkeleton } from "@/components/text/HeadingText";
import BigPointsBadge, { BigPointsBadgeSkeleton } from "@/components/badges/BigPointsBadge";

type Props = {
    challenge: Challenge;
};

export default function ChallengePageHeader(props: Props) {
    return (
        <div className={`flex flex-col space-y-2`}>
            <HeadingText>{props.challenge.name}</HeadingText>

            <div className={`flex flex-row items-center space-x-2`}>
                <BigPointsBadge points={props.challenge.points} />
            </div>
        </div>
    );
}

export function ChallengePageHeaderSkeleton() {
    return (
        <div className={`flex flex-col space-y-2`}>
            <HeadingTextSkeleton w={"450"} />

            <div className={`flex flex-row items-center space-x-2`}>
                <BigPointsBadgeSkeleton />
            </div>
        </div>
    );
}
