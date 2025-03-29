"use client";

import AnimationStagger from "@/components/framer-motion/AnimationStagger";
import { GalleryEntry } from "@/types/gallery-types";
import GalleryEntryCard, { GalleryEntryCardSkeleton } from "@/components/groups/gallery/GalleryEntryCard";
import { useEffect, useState } from "react";
import SubmitButton from "@/components/buttons/SubmitButton";

type Props = {
    gallery: GalleryEntry[];
};

export default function GalleryList(props: Props) {
    const [pages, setPages] = useState(1);
    const [visibleImages, setVisibleImages] = useState<GalleryEntry[]>([]);

    useEffect(() => {
        const totalImages = pages * 8;
        setVisibleImages(props.gallery.slice(0, totalImages));
    }, [pages, props.gallery]);

    document.onscroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
            setPages(pages + 1);
        }
    };

    return (
        <div className={`flex flex-col space-y-10`}>
            {props.gallery.length !== 0 && (
                <div className={`grid grid-cols-4 sm:grid-cols-2 gap-6 sm:gap-2 justify-start`}>
                    {visibleImages.map((galleryEntry, index) => (
                        <AnimationStagger key={index} index={index} length={props.gallery.length}>
                            <GalleryEntryCard entry={galleryEntry} />
                        </AnimationStagger>
                    ))}
                </div>
            )}

            {props.gallery.length > visibleImages.length && (
                <SubmitButton onClick={() => setPages(pages + 1)} buttonText={"See more"}></SubmitButton>
            )}

            {props.gallery.length == 0 && <p className={`text-gray-500`}>No one has submitted any photos yet ☹️.</p>}
        </div>
    );
}

export function GalleryListSkeleton() {
    return (
        <div className={`flex flex-col space-y-10`}>
            <div className={`grid grid-cols-4 sm:grid-cols-2 gap-6 sm:gap-2 justify-start`}>
                <GalleryEntryCardSkeleton />
                <GalleryEntryCardSkeleton />
                <GalleryEntryCardSkeleton />
                <GalleryEntryCardSkeleton />
                <GalleryEntryCardSkeleton />
                <GalleryEntryCardSkeleton />
                <GalleryEntryCardSkeleton />
                <GalleryEntryCardSkeleton />
                <GalleryEntryCardSkeleton />
                <GalleryEntryCardSkeleton />
            </div>
        </div>
    );
}
