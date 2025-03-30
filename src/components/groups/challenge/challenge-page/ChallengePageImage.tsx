import { Image, Skeleton } from "@mantine/core";
import { Challenge } from "@/classes/Challenge/Challenge";
import React from "react";

type Props = {
    readonly challenge: Challenge;
};

export default function ChallengePageImage(props: Props) {
    return (
        <div {...dimensions}>
            <Image
                src={props.challenge.image}
                alt={props.challenge.name}
                radius="md"
                h={dimensions.h}
                w={dimensions.w}
                fit={"cover"}
                className={`border-2 border-gray-200`}
            />
        </div>
    );
}

export function ChallengePageImageSkeleton() {
    return (
        <div {...dimensions}>
            <Skeleton {...dimensions} radius="md" />
        </div>
    );
}

const dimensions = {
    w: 384,
    h: 384,
};
