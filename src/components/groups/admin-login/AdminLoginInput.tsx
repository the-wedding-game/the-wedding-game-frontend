"use client";

import { TextInput } from "@mantine/core";
import SubmitButton from "@/components/buttons/SubmitButton";
import { useState } from "react";
import useAdminLoginForm from "@/hooks/AdminLoginFormHook";

export default function AdminLoginInput() {
    const [loading, setLoading] = useState(false);
    const { form, submit } = useAdminLoginForm();

    async function submitForm() {
        setLoading(true);
        await submit();
        setLoading(false);
    }

    return (
        <div className={`flex flex-col space-y-5`}>
            <TextInput label="Username" required key={form.key("username")} {...form.getInputProps("username")} />
            <TextInput
                type="password"
                label="Password"
                required
                key={form.key("password")}
                {...form.getInputProps("password")}
            />
            <SubmitButton onClick={submitForm} buttonText={"Continue"} loading={loading} disabled={!form.isValid()} />
        </div>
    );
}
