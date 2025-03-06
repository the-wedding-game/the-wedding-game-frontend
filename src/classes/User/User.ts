import { UserRole } from "@/classes/User/UserTypes";
import { NotLoggedInError } from "@/errors/NotLoggedInError";
import { LoginRequest } from "@/api/auth/login/LoginRequest";
import { NotAdminError } from "@/errors/NotAdminError";

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

    public static async login(username: string): Promise<void> {
        const loginRequest = new LoginRequest(username);
        const loginResponse = await loginRequest.send();
        localStorage.setItem("accessToken", loginResponse.getAccessToken());
    }

    public static async adminLogin(username: string, password: string): Promise<void> {
        const loginRequest = new LoginRequest(username, password);
        const loginResponse = await loginRequest.send();

        if (loginResponse.getRole() !== "ADMIN") {
            throw new NotAdminError();
        }

        localStorage.setItem("accessToken", loginResponse.getAccessToken());
    }
}
