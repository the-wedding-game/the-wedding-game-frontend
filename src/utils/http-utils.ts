import { NotFoundError } from "@/errors/NotFoundError";
import { NotAuthorizedError } from "@/errors/NotAuthorizedError";
import { ValidationError } from "@/errors/ValidationError";

export async function checkResponse(response: Response) {
    if (response.status == 404) throw new NotFoundError();
    if (response.status == 403) throw new NotAuthorizedError();
    if (response.status == 401) throw new NotAuthorizedError();
    if (response.status == 400) throw new ValidationError((await response.json()).message);

    if (!response.ok) throw new Error("Unknown error");
}
