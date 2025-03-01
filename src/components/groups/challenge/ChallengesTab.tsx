import { MantineColor, Tabs, Text } from "@mantine/core";
import CountIndicatorBadge from "@/components/badges/CountIndicatorBadge";

type Props = {
    name: string;
    count: number;
    color: MantineColor;
};

export default function ChallengesTab(props: Props) {
    return (
        <Tabs.Tab value={props.name} color={props.color}>
            <div className="flex flex-row space-x-2 items-center justify-center">
                <Text fw={500}>{props.name}</Text>
                <CountIndicatorBadge count={props.count} color={props.color} />
            </div>
        </Tabs.Tab>
    );
}
