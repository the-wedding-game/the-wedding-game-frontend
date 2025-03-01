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
            if (error instanceof Error) {
                openModal("Oh no! ☹️", error.message, "error");
                return;
            }

            openModal("Oh no! ☹️", "There was an error logging in. Please try again later.", "error");
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
