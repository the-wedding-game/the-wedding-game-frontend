import { PrivilegedRequest } from "@/api/PrivilegedRequest";
import { GalleryResponse, GalleryResponseBody } from "@/api/gallery/GalleryResponse";

const ENDPOINT = "gallery";
const METHOD = "GET";

export class GalleryRequest extends PrivilegedRequest {
    public constructor() {
        super(ENDPOINT, METHOD);
    }

    public async send(): Promise<GalleryResponse> {
        const response = (await super.send()) as GalleryResponseBody;
        return new GalleryResponse(response);
    }
}
