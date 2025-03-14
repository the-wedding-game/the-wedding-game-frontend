"use client";

import GalleryHeader from "@/components/groups/gallery/GalleryHeader";
import GalleryList, { GalleryListSkeleton } from "@/components/groups/gallery/GalleryList";
import useGallery from "@/hooks/GalleryHook";
import AnimationFade from "@/components/framer-motion/AnimationFade";

export default function Gallery() {
    const { gallery, loading } = useGallery();

    return (
        <div className={`flex flex-col space-y-10 w-full`}>
            <GalleryHeader />

            {gallery && (
                <AnimationFade key={"challenges"}>
                    <GalleryList gallery={gallery} />
                </AnimationFade>
            )}

            {loading && (
                <AnimationFade key={"loader"}>
                    <GalleryListSkeleton />
                </AnimationFade>
            )}
        </div>
    );
}
