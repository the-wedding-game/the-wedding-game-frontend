import { UserRole } from "@/classes/User/UserTypes";
import { NotLoggedInError } from "@/errors/NotLoggedInError";

export class User {
    username: string;
    role: UserRole;

    constructor(username: string, role: UserRole) {
        this.username = username;
        this.role = role;
    }

    public static getAccessToken(): string {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            throw new NotLoggedInError();
        }
        return accessToken;
    }
}
