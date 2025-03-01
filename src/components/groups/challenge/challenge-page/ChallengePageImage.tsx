import { Image } from "@mantine/core";
import { Challenge } from "@/classes/Challenge/Challenge";
import React from "react";

type Props = {
    challenge: Challenge;
};

export default function ChallengePageImage(props: Props) {
    return (
        <div className={`w-96 h-96`}>
            <Image
                src={props.challenge.image}
                alt={props.challenge.name}
                radius="md"
                h={"388"}
                fit={"cover"}
                className={`border-2 border-gray-200`}
            />
        </div>
    );
}
