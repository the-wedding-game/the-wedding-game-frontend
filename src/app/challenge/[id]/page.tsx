"use client"

import {Badge, Button, Image, Loader, Text, TextInput, Title} from "@mantine/core";
import {useUser} from "@/classes/User/UserHook";
import {useChallenge} from "@/classes/Challenge/ChallengeHook";
import {useParams} from "next/navigation";
import {useState} from "react";
import {Answer} from "@/classes/Answer/Answer";

export default function Challenge() {
    useUser();
    const [answer, setAnswer] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [answerCorrect, setAnswerCorrect] = useState<boolean>(false);
    const [answerChanged, setAnswerChanged] = useState<boolean>(false);
    
    const id = useParams<{id: string}>().id;
    const challenge = useChallenge(Number(id));
    if (!challenge) {
        return <Loader/>;
    }
    
    function handleChangeAnswer(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value);
        setAnswerChanged(false);
    }
    
    async function submitAnswer() {
        setLoading(true);
        setAnswerChanged(true)
        
        const answerObj = new Answer(Number(id), answer);
        if (await answerObj.verify()) {
            setAnswerCorrect(true);
        } else {
            setAnswerCorrect(false);
        }
        setLoading(false);
    }
    
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
                            <TextInput placeholder="Your answer" radius="sm" mt="sm" value={answer}
                                       onChange={(e) => {handleChangeAnswer(e)}}
                                       disabled={answerCorrect}
                            />
                            
                            { answerChanged && !answerCorrect && (
                                <Badge color="red" mt="sm" radius="sm">Incorrect answer</Badge>
                            )}
                            { answerChanged && answerCorrect && (
                                <Badge color="green" mt="sm" radius="sm">Correct answer</Badge>
                            )}
                            
                            { !answerCorrect  && (
                                <Button color="blue" fullWidth mt="md" radius="sm" onClick={submitAnswer}
                                        loading={loading}>
                                    Submit answer
                                </Button>
                            )}
                        </div>
                    )
                }
            </div>
        </div>
    );
}
