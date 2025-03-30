"use client";

import { TextInput } from "@mantine/core";
import SubmitButton from "@/components/buttons/SubmitButton";
import { useState } from "react";
import { useModal } from "@/components/modals/Modal";
import { User } from "@/classes/User/User";
import { getErrorModal } from "@/constants/modal-templates";
import { useRouter } from "next/navigation";

export default function WelcomeInput() {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const { openModal } = useModal();
    const router = useRouter();

    async function submit() {
        setLoading(true);
        try {
            await User.login(username);
            router.push("/");
        } catch (error: unknown) {
            return openModal(getErrorModal("There was an error logging in. Please try again later.", error));
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
