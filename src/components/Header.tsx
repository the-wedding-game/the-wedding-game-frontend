import {Button, Title} from "@mantine/core";

export default function Header() {
    return (
        <div className={`flex flex-row justify-center items-center bg-slate-800 p-5 border-b-2 border-b-gray-500`}>
            <div className={`flex w-[1200px] justify-between items-center`}>
                <Title order={4} className={`text-gray-100`}>The Wedding Game</Title>
                
                <div className={`flex flex-row space-x-5`}>
                    <Button variant={"outline"} color={"white"} radius="sm" size={"sm"}>Gallery</Button>
                    <Button variant={"outline"} color={"white"} radius="sm" size={"sm"}>Instructions</Button>
                    <Button variant={"outline"} color={"white"} radius="sm" size={"sm"}>Leaderboard</Button>
                    <Button variant={"outline"} color={"white"} radius="sm" size={"sm"}>Challenges</Button>
                </div>
            </div>
        </div>
    );
}