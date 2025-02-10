"use client"

import {useUser} from "@/classes/User/UserHook";
import {Title} from "@mantine/core";

export default function WelcomeBar() {
    const user = useUser();
    
    return (
        <>
            {user && (
               <div>
                   <Title order={2} className={`text-gray-700`}>Welcome, {user.username} 🤩</Title>
               </div>
            )}
        </>
    )
}