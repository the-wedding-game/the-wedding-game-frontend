import { UserRole } from "@/classes/User/UserTypes";
import { NotLoggedInError } from "@/errors/NotLoggedInError";
import { LoginRequest } from "@/api/auth/login/LoginRequest";

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

    public static async login(username: string) {
        const loginRequest = new LoginRequest(username);
        const loginResponse = await loginRequest.fetch();
        localStorage.setItem("accessToken", loginResponse.getAccessToken());
    }
}
