import { checkResponse } from "@/utils/http-utils";
import { LoginResponse } from "@/api/login/LoginResponse";

export class LoginRequest {
    private readonly username: string;

    public constructor(username: string) {
        this.username = username;
    }

    public async fetch(): Promise<LoginResponse> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: this.username,
            }),
        });

        await checkResponse(response);
        return new LoginResponse(await response.json());
    }
}
