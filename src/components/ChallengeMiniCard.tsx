import {Challenge} from "@/classes/Challenge/Challenge";
import {Card, Image, Group, Badge, Button, Text, CardSection} from "@mantine/core";

type Props = {
    challenge: Challenge;
}

export default function ChallengeMiniCard(props: Props) {
    const challenge = props.challenge;
    
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className={`max-w-96`}>
            <CardSection>
                <Image src={challenge.image} alt={challenge.name} radius="md" height={200} width={200}/>
            </CardSection>
            
            <div className={`flex flex-col justify-between items-baseline h-full`}>
                
                <div className={`flex flex-col`}>
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500} lineClamp={3}>{challenge.name}</Text>
                        <Badge color="pink">{challenge.points}</Badge>
                    </Group>
                    
                    <Text size="sm" c="dimmed">
                        {challenge.description}
                    </Text>
                </div>
                
                <div>
                    <a href={`/challenge/${challenge.id}`}>
                        <Button color="black" fullWidth mt="md" radius="sm">
                            View challenge
                        </Button>
                    </a>
                </div>
            
            </div>
        
        </Card>
    );
}