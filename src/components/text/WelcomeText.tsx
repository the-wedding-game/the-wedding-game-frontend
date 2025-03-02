import { Skeleton, Title } from "@mantine/core";

type Props = {
    username: string;
};

export default function WelcomeText(props: Props) {
    return (
        <Title order={2} className={`text-gray-700`} {...dimensions}>
            Welcome, {props.username} 🤩
        </Title>
    );
}

export function WelcomeTextSkeleton() {
    return <Skeleton radius={"xl"} {...dimensions} />;
}

const dimensions = {
    w: 400,
    h: 30,
};
