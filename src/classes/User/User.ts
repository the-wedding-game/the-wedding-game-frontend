import { UserRole } from "@/classes/User/UserTypes";
import { NotLoggedInError } from "@/errors/NotLoggedInError";
import { checkResponse } from "@/utils/http-utils";
import { LoginResponse } from "@/api/login/LoginResponse";

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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
            }),
        });

        await checkResponse(response);
        const loginResponse = new LoginResponse(await response.json());
        localStorage.setItem("accessToken", loginResponse.getAccessToken());
    }
}
