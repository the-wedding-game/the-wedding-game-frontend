import { useEffect, useState } from "react";
import { User } from "@/classes/User/User";
import { UserFactory } from "@/classes/User/UserFactory";
import { useRouter } from "next/navigation";

export function useUser() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        UserFactory.getCurrentUser()
            .then((user) => {
                setUser(user);
            })
            .catch(() => {
                setUser(null);
                router.push("/welcome");
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
