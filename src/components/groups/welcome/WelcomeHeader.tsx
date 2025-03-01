import { Text, Title } from "@mantine/core";

export default function WelcomeHeader() {
    return (
        <div>
            <Title order={1} className={`text-gray-700`}>
                Welcome to the wedding
            </Title>
            <Text size="md" className={`text-gray-500`}>
                Please tell us your name to continue
            </Text>
        </div>
    );
}
