import { User } from "@/classes/User/User";
import { checkResponse } from "@/utils/http-utils";
import { CannotProcessEntity } from "@/errors/CannotProcessEntity";

export const ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/upload`;

export type UploadResponse = {
    url: string;
};

export class Image {
    private readonly file: File;

    constructor(file: File) {
        this.file = file;
    }

    private static async processResponse(response: Response): Promise<string> {
        try {
            const data: UploadResponse = await response.json();
            return data.url;
        } catch (error) {
            if (error instanceof Error) {
                throw new CannotProcessEntity("Image", error.message);
            }
            throw new CannotProcessEntity("Image", "Unknown error");
        }
    }

    public async upload(): Promise<string> {
        const formData = new FormData();
        formData.append("image", this.file);

        const response = await fetch(ENDPOINT, {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${User.getAccessToken()}`,
            },
        });

        await checkResponse(response);
        return Image.processResponse(response);
    }
}
