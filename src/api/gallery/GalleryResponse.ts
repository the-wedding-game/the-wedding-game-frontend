import { CannotProcessEntityError } from "@/errors/CannotProcessEntityError";
import { GalleryEntry } from "@/types/gallery-types";

export type GalleryResponseBody = {
    images: {
        url: string;
        submitted_by: string;
    }[];
};

export class GalleryResponse {
    private readonly images: GalleryEntry[];

    public constructor(data: GalleryResponseBody) {
        this.images = data.images.map((image) => ({
            url: image.url,
            submittedBy: image.submitted_by,
        }));
        this.check();
    }

    public getGallery(): GalleryEntry[] {
        return this.images;
    }

    private check() {
        if (this.images == null) throw new CannotProcessEntityError("GalleryResponse", "leaderboard is missing");
    }
}
