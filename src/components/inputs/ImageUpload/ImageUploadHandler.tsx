import { FileInput } from "@mantine/core";
import ImageUploadButton, { ImageUploadButtonSkeleton } from "@/components/inputs/ImageUpload/ImageUploadButton";
import React from "react";
import { Image as ImageManager } from "@/classes/Image/Image";
import { useModal } from "@/components/modals/Modal";
import { getErrorModal } from "@/constants/modal-templates";

type Props = {
    setLoading: (loading: boolean) => void;
    setImage: (url: string | null) => void;
};

export default function ImageUploadHandler(props: Props) {
    const hiddenFileInput = React.useRef(null);
    const { openModal } = useModal();

    const handleUploadButtonClick = () => {
        if (hiddenFileInput.current) {
            // @ts-expect-error idk why
            hiddenFileInput.current.click();
        }
    };

    async function handleImageUpload(payload: File | null) {
        if (!payload) return;
        props.setLoading(true);

        try {
            const image = new ImageManager(payload);
            const url = await image.upload();
            props.setImage(url);
        } catch (error) {
            return openModal(getErrorModal("There was an error uploading the image. Please try again later.", error));
        } finally {
            props.setLoading(false);
        }
    }

    return (
        <div>
            <FileInput
                ref={hiddenFileInput}
                accept={"image/*"}
                style={{ display: "none" }}
                onChange={handleImageUpload}
            />

            <ImageUploadButton onClick={handleUploadButtonClick} />
        </div>
    );
}

export function ImageUploadHandlerSkeleton() {
    return <ImageUploadButtonSkeleton />;
}
