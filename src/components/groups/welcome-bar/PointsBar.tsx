"use client";

import usePoints from "@/hooks/PointsHook";
import { useAllChallenges } from "@/hooks/AllChallengesHook";
import { Progress, Skeleton } from "@mantine/core";
import MediumText, { MediumTextSkeleton } from "@/components/text/MediumText";
import SmallText from "@/components/text/SmallText";
import AnimationWrapper from "@/components/framer-motion/AnimationWrapper";
import AnimationFade from "@/components/framer-motion/AnimationFade";
import { useEffect, useState } from "react";

export default function PointsBar() {
    const { points, loading: pointsLoading } = usePoints();
    const { challenges, loading: challengesLoading } = useAllChallenges(false);
    const maxPoints = challenges?.reduce((total, challenge) => total + challenge.points, 0);

    return (
        <AnimationWrapper>
            {!pointsLoading && !challengesLoading && (
                <AnimationFade key={"loaded"}>
                    <PointsBarInner points={points || 0} maxPoints={maxPoints || 100} />
                </AnimationFade>
            )}

            <AnimationFade key={"loading"}>
                {(pointsLoading || challengesLoading) && <PointsBarSkeleton />}
            </AnimationFade>
        </AnimationWrapper>
    );
}

export function PointsBarSkeleton() {
    return (
        <div className={`flex flex-col`}>
            <div className={`flex flex-row space-x-2 items-center`}>
                <MediumTextSkeleton w={"300"} />
            </div>

            <Skeleton w={"100%"} h={30} className={`mb-6`} />
        </div>
    );
}

type Props = {
    points: number;
    maxPoints: number;
};
function PointsBarInner(props: Props) {
    const points = props.points;
    const maxPoints = props.maxPoints;
    const [displayedPercentage, setDisplayedPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => setDisplayedPercentage((points / maxPoints) * 100), 100);
    }, [maxPoints, points]);

    return (
        <div className={`flex flex-col space-y-2`}>
            <div className={`flex flex-row space-x-2 items-center`}>
                <MediumText weight={500}>You have {points.toLocaleString()} points!</MediumText>
                <SmallText>(Out of {maxPoints.toLocaleString()})</SmallText>
            </div>

            <Progress.Root size={30} transitionDuration={2000}>
                <Progress.Section value={displayedPercentage} color="blue">
                    <Progress.Label>{points.toLocaleString()}</Progress.Label>
                </Progress.Section>
            </Progress.Root>
        </div>
    );
}
