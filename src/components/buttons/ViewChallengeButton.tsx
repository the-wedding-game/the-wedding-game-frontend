import { Button } from "@mantine/core";

type Props = {
    challengeId: number;
};

export default function ViewChallengeButton(props: Props) {
    return (
        <div>
            <a href={`/challenge/${props.challengeId}`}>
                <Button color="blue" fullWidth mt="md" radius="sm">
                    View challenge
                </Button>
            </a>
        </div>
    );
}
