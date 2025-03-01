import { Text, Title } from "@mantine/core";

export default function FooterTagline() {
    return (
        <div>
            <Title order={4} className={`text-gray-700`}>
                The Wedding Game
            </Title>
            <Text size={"xs"}>Developed by Kaneel Dias with 💖</Text>
        </div>
    );
}
