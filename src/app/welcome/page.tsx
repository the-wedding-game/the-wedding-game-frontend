"use client"

import {Button, Card, Text, TextInput, Title} from "@mantine/core";
import {useState} from "react";

export default function Welcome() {
    const [username, setUsername] = useState("");
    
    async function submit() {
        if (username.length === 0) {
            return;
        }
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username
            })
        });
        
        if (!res.ok) {
            throw new Error('Login failed');
        }
        
        const data = await res.json();
        const accessToken = data.access_token;
        localStorage.setItem('accessToken', accessToken);
        
        window.location.href = '/';
    }
    
    return (
        <div className={`flex items-center justify-center h-full`}>
            <Card shadow={"md"} padding="lg" radius="md" withBorder>
                <div className={`flex flex-col space-y-10`}>
                    <div>
                        <Title order={1} className={`text-gray-700`}>Welcome to the wedding</Title>
                        <Text size="md" className={`text-gray-500`}>
                            Please tell us your name to continue
                        </Text>
                    </div>
                    
                    <div>
                        <TextInput label="Name" required value={username}
                                   onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    
                    <div className={`flex flex-col justify-between items-baseline h-full`}>
                        <div>
                            <Button color="blue" fullWidth mt="md" radius="md" onClick={submit}>
                                Continue
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    
    );
}
