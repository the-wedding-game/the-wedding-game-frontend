import { useEffect, useState } from "react";
import { User } from "@/classes/User/User";
import { UserFactory } from "@/classes/User/UserFactory";

export function useUser() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        UserFactory.getCurrentUser()
            .then((user) => {
                setUser(user);
            })
            .catch(() => {
                setUser(null);
                window.location.href = "/welcome";
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {
        user,
        loading,
    };
}
