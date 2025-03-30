import { GalleryEntry } from "@/types/gallery-types";
import { AspectRatio, Image, Skeleton } from "@mantine/core";

type Props = {
    readonly entry: GalleryEntry;
};

export default function GalleryImage(props: Props) {
    return (
        <AspectRatio ratio={1} mx="auto">
            <Image
                src={props.entry.url}
                alt={props.entry.submittedBy}
                radius="md"
                height={200}
                width={200}
                loading={"lazy"}
                fit={"cover"}
            />
        </AspectRatio>
    );
}

export function GalleryImageSkeleton() {
    return (
        <div className={`h-full md:-m-5`}>
            <AspectRatio ratio={1} mx="auto">
                <Skeleton radius="md" />
            </AspectRatio>
        </div>
    );
}
