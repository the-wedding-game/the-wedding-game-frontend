import { CardSection, Image } from "@mantine/core";
import { Challenge } from "@/classes/Challenge/Challenge";

type Props = {
    challenge: Challenge;
};

export default function ChallengeCardImage(props: Props) {
    return (
        <CardSection>
            <Image
                src={props.challenge.image}
                alt={props.challenge.name}
                radius="md"
                height={200}
                width={200}
                className={`w-96 h-96`}
            />
        </CardSection>
    );
}
