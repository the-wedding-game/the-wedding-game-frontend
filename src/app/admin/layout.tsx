"use client";

import { ReactNode } from "react";
import { useUser } from "@/classes/User/UserHook";
import AccessDenied from "@/components/static/AccessDenied";
import GenericLoading from "@/components/static/GenericLoading";

type Props = {
    children: ReactNode;
};

export default function AdminLayout(props: Props) {
    const { user, loading } = useUser();
    if (loading) return <GenericLoading />;

    if (!user || !user.isAdmin()) {
        return <AccessDenied />;
    }

    return <>{props.children}</>;
}
