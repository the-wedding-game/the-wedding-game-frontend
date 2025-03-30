"use client";

import { ReactNode } from "react";
import { useUser } from "@/classes/User/UserHook";
import TitleText from "@/components/text/TitleText";
import { Card, Loader } from "@mantine/core";
import ErrorIcon from "@/components/icons/ErrorIcon";
import AdminLoginButton from "@/components/buttons/AdminLoginButton";
import HorizontallyCentered from "@/components/alignment/HorizontallyCentered";

type Props = {
    children: ReactNode;
};

export default function AdminLayout(props: Props) {
    const { user, loading } = useUser();
    if (loading) {
        return (
            <HorizontallyCentered>
                <Loader />
            </HorizontallyCentered>
        );
    }

    if (!user || !user.isAdmin()) {
        return (
            <HorizontallyCentered>
                <Card shadow={"md"} className={`flex flex-col space-y-5`}>
                    <div className={`flex flex-row items-start space-x-2`}>
                        <ErrorIcon />
                        <div className={`flex flex-col items-start space-y-5`}>
                            <div className={`flex flex-col items-start space-y-2`}>
                                <TitleText>Access Denied</TitleText>
                                <div>You must be logged in as an administrator to view this page.</div>
                            </div>
                            <AdminLoginButton />
                        </div>
                    </div>
                </Card>
            </HorizontallyCentered>
        );
    }

    return <>{props.children}</>;
}
