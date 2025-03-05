import { TextInput } from "@mantine/core";
import SubmitButton from "@/components/buttons/SubmitButton";
import { useState } from "react";
import { useModal } from "@/components/modals/Modal";
import { User } from "@/classes/User/User";

export default function WelcomeInput() {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const { openModal } = useModal();

    async function submit() {
        setLoading(true);
        try {
            await User.login(username);
            window.location.href = "/";
        } catch (error: unknown) {
            openModal({
                title: "Oh no! ☹️",
                message: "There was an error logging in. Please try again later.",
                type: "error",
                additionalDetails: error instanceof Error ? error.stack : "",
            });
            return;
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <TextInput label="Name" required value={username} onChange={(e) => setUsername(e.target.value)} />
            <SubmitButton onClick={submit} buttonText={"Continue"} loading={loading} disabled={username.length === 0} />
        </div>
    );
}
