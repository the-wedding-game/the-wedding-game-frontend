"use client";

import { Loader } from "@mantine/core";
import React, { useState } from "react";
import ImageUploadLabel, { ImageUploadLabelSkeleton } from "@/components/inputs/ImageUpload/ImageUploadLabel";
import ImageUploadHandler, { ImageUploadHandlerSkeleton } from "@/components/inputs/ImageUpload/ImageUploadHandler";
import ImagePreview from "@/components/inputs/ImageUpload/ImagePreview";

type Props = {
    readonly image: string | null;
    readonly setImage: (url: string | null) => void;
    readonly label: string;
    readonly disableRemove?: boolean;
};

export default function ImageUpload(props: Props) {
    const disableRemove = props.disableRemove || false;
    const [loading, setLoading] = useState(false);

    return (
        <div className={`flex flex-col space-y-2`}>
            <ImageUploadLabel label={props.label} />

            {!loading && !props.image && <ImageUploadHandler setImage={props.setImage} setLoading={setLoading} />}

            {loading && <Loader size={"sm"} />}

            {props.image && (
                <ImagePreview
                    image={props.image}
                    removeImage={() => props.setImage(null)}
                    disableRemove={disableRemove}
                />
            )}
        </div>
    );
}

export function ImageUploadSkeleton() {
    return (
        <div className={`flex flex-col space-y-2`}>
            <ImageUploadLabelSkeleton />
            <ImageUploadHandlerSkeleton />
        </div>
    );
}
