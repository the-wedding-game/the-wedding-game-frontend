import {Button, Text, Title} from "@mantine/core";

export default function Footer() {
    return (
        <div className={`flex flex-row justify-center items-center bg-slate-200 p-5 border-t-2 border-t-gray-500
                         mt-20 pt-10 pb-5`}>
            <div className={`flex w-[1200px] justify-between items-center`}>
                <div>
                    <Title order={4} className={`text-gray-700`}>The Wedding Game</Title>
                    <Text size={"xs"}>Developed by Kaneel Dias with 💖</Text>
                </div>
                
                <div className={`flex flex-row space-x-5`}>
                    <Button variant={"outline"} color={"black"} radius="sm" size={"sm"}>GitHub</Button>
                    <Button variant={"outline"} color={"black"} radius="sm" size={"sm"}>Create your own</Button>
                </div>
            </div>
        </div>
    );
}