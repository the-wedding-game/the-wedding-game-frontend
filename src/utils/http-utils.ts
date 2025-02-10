import {NotFoundError} from "@/errors/NotFoundError";

export function checkResponse(response: Response) {
    if (response.status == 404) throw new NotFoundError()
}