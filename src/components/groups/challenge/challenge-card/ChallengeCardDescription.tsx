import SmallText, { SmallTextSkeleton } from "@/components/text/SmallText";

type Props = {
    readonly description: string;
};

export default function ChallengeCardDescription(props: Props) {
    return <SmallText>{props.description}</SmallText>;
}

export function ChallengeCardDescriptionSkeleton() {
    return (
        <>
            <SmallTextSkeleton w={"100%"} />
            <SmallTextSkeleton w={"100%"} />
            <SmallTextSkeleton w={"50%"} />
        </>
    );
}
