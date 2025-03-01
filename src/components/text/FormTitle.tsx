import { Title } from "@mantine/core";

type Props = {
    title: string;
};

export default function FormTitle(props: Props) {
    return (
        <Title order={2} className={`text-gray-700`}>
            {props.title}
        </Title>
    );
}
