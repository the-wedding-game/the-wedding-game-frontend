import { Challenge } from "@/classes/Challenge/Challenge";
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
import React from "react";

type Props = {
    readonly challenge: Challenge;
};

export default function ChallengePage(props: Props) {
    return (
        <div className={`flex flex-col w-full space-y-5`}>
            <ChallengePageHeader challenge={props.challenge} />

            <div className={`flex flex-row sm:flex-col space-x-5 sm:space-y-2 sm:space-x-0`}>
                <ChallengePageImage challenge={props.challenge} />

                <div className={`flex flex-col w-96 justify-between p-2 sm:space-y-5`}>
                    <ChallengePageDescription description={props.challenge.description} />

                    {props.challenge.completed && <ChallengeCompletedBadge />}

                    {!props.challenge.completed && <ChallengeSubmissionGroup challenge={props.challenge} />}
                </div>
            </div>
        </div>
    );
}

export function ChallengePageSkeleton() {
    return (
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
    );
}
