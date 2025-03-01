import { Challenge } from "@/classes/Challenge/Challenge";
import { Badge, Title } from "@mantine/core";
import React from "react";

type Props = {
    challenge: Challenge;
};

export default function ChallengePageHeader(props: Props) {
    return (
        <div className={`flex flex-col space-y-2`}>
            <Title order={1} className={`text-gray-700`}>
                {props.challenge.name}
            </Title>

            <div className={`flex flex-row items-center space-x-2`}>
                <Badge color="pink" radius="sm">
                    {props.challenge.points} points
                </Badge>
            </div>
        </div>
    );
}
