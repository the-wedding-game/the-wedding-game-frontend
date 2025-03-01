import { APIRequest } from "@/api/Request";
import { LoginResponse, LoginResponseBody } from "@/api/auth/login/LoginResponse";

const ENDPOINT = "auth/login";
const METHOD = "POST";

export type LoginRequestBody = {
    username: string;
};

export class LoginRequest extends APIRequest {
    private readonly username: string;

    public constructor(username: string) {
        super(ENDPOINT, METHOD);
        this.username = username;
    }

    public async send(): Promise<LoginResponse> {
        const requestBody: LoginRequestBody = {
            username: this.username,
        };
        const response = (await super.send(requestBody)) as LoginResponseBody;
        return new LoginResponse(response);
    }
}
