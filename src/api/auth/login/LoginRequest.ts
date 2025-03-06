import { APIRequest } from "@/api/Request";
import { LoginResponse, LoginResponseBody } from "@/api/auth/login/LoginResponse";

const ENDPOINT = "auth/login";
const METHOD = "POST";

export type LoginRequestBody = {
    username: string;
    password?: string;
};

export class LoginRequest extends APIRequest {
    private readonly username: string;
    private readonly password?: string;

    public constructor(username: string, password?: string) {
        super(ENDPOINT, METHOD);
        this.username = username;
        this.password = password;
    }

    public async send(): Promise<LoginResponse> {
        const requestBody: LoginRequestBody = {
            username: this.username,
            password: this.password,
        };
        const response = (await super.send(requestBody)) as LoginResponseBody;
        return new LoginResponse(response);
    }
}
