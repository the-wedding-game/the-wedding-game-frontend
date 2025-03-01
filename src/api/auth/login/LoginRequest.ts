import { APIRequest } from "@/api/Request";
import { LoginResponse, LoginResponseBody } from "@/api/auth/login/LoginResponse";

const ENDPOINT = "auth/login";
const METHOD = "POST";

export class LoginRequest extends APIRequest {
    private readonly username: string;

    public constructor(username: string) {
        super(ENDPOINT, METHOD);
        this.username = username;
    }

    public async fetch(): Promise<LoginResponse> {
        const response = (await super.fetch({
            username: this.username,
        })) as LoginResponseBody;

        return new LoginResponse(response);
    }
}
