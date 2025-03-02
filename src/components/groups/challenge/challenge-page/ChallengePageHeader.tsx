import { Challenge } from "@/classes/Challenge/Challenge";
import React from "react";
import MediumText, { MediumTextSkeleton } from "@/components/text/MediumText";
import PointsBadge, { PointsBadgeSkeleton } from "@/components/badges/PointsBadge";

type Props = {
    challenge: Challenge;
};

export default function ChallengePageHeader(props: Props) {
    return (
        <div className={`flex flex-col space-y-2`}>
            <MediumText name={props.challenge.name} />
            {/*<Title order={1} className={`text-gray-700`}>*/}
            {/*    {props.challenge.name}*/}
            {/*</Title>*/}

            <div className={`flex flex-row items-center space-x-2`}>
                <PointsBadge points={props.challenge.points} />
                {/*<Badge color="pink" radius="sm">*/}
                {/*    {props.challenge.points} points*/}
                {/*</Badge>*/}
            </div>
        </div>
    );
}

export function ChallengePageHeaderSkeleton() {
    return (
        <div className={`flex flex-col space-y-2`}>
            <MediumTextSkeleton />

            <div className={`flex flex-row items-center space-x-2`}>
                <PointsBadgeSkeleton />
            </div>
        </div>
    );
}
