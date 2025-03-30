import { Card } from "@mantine/core";
import { GalleryEntry } from "@/types/gallery-types";
import GalleryMetadata from "@/components/groups/gallery/GalleryMetadata";
import GalleryImage, { GalleryImageSkeleton } from "@/components/groups/gallery/GalleryImage";

type Props = {
    readonly entry: GalleryEntry;
};

export default function GalleryEntryCard(props: Props) {
    return (
        <Card shadow="sm" padding="0" radius="md" withBorder className={`max-w-96 w-full`}>
            <GalleryImage entry={props.entry} />
            <GalleryMetadata entry={props.entry} />
        </Card>
    );
}

export function GalleryEntryCardSkeleton() {
    return (
        <Card shadow="sm" padding="0" radius="md" withBorder className={`max-w-96 w-full`}>
            <GalleryImageSkeleton />
        </Card>
    );
}
