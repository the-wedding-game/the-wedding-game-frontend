import {useEffect, useState} from "react";
import {User} from "@/classes/User/User";
import {UserFactory} from "@/classes/User/UserFactory";

export function useUser() {
    const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {
        UserFactory.getCurrentUser()
        .then((user) => {
            setUser(user);
        })
        .catch(() => {
            window.location.href = "/welcome";
        });
    }, []);
    
    return user;
}