import {ChallengeFactory} from "@/classes/Challenge/ChallengeFactory";
import {Button, Image, Text, TextInput, Title} from "@mantine/core";

export default async function Challenge({params}: {params: {id: number}}) {
    const challenge = await ChallengeFactory.get(params.id);
    return (
        <div className={`flex flex-row w-full space-x-5`}>
            <div className={`w-96 h-96`}>
                <Image src={challenge.image} alt={challenge.name} radius="md" h={"388"} fit={"cover"}/>
            </div>
            
            <div className={`flex flex-col w-96 justify-between`}>
                <div>
                    <Title order={1} className={`text-gray-700`}>{challenge.name}</Title>
                    <Text size="md" className={`text-gray-500`}>{challenge.description}</Text>
                </div>
                
                {
                    challenge.type === "ANSWER_QUESTION" && (
                        <div className={`flex flex-col`}>
                            <TextInput placeholder="Your answer" radius="sm" mt="sm"/>
                            <Button color="blue" fullWidth mt="md" radius="sm">Submit answer</Button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
