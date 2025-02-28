"use client";

import { Button, FileInput, Image, Loader, Text } from "@mantine/core";
import React from "react";
import { Image as ImageManager } from "@/classes/Image/Image";
import { useModal } from "@/components/modals/Modal";

type Props = {
    image: string | null;
    setImage: (url: string | null) => void;
};

export default function ImageUpload(props: Props) {
    const hiddenFileInput = React.useRef(null);
    const { openModal } = useModal();
    const [loading, setLoading] = React.useState(false);

    const handleUploadButtonClick = () => {
        if (hiddenFileInput.current) {
            // @ts-expect-error idk why
            hiddenFileInput.current.click();
        }
    };

    async function handleImageUpload(payload: File | null) {
        if (!payload) return;
        setLoading(true);

        //wait 5s
        await new Promise((resolve) => setTimeout(resolve, 1000));

        try {
            const image = new ImageManager(payload);
            const url = await image.upload();
            props.setImage(url);
        } catch (error) {
            if (error instanceof Error) openModal("Oh no! ☹️", error.message, "error");
            else openModal("Oh no! ☹️", "There was an error uploading the image. Please try again later.", "error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={`flex flex-col space-y-2`}>
            <div className={`flex flex-row space-x-1`}>
                <Text size="sm" fw={500} className={`text-gray-700  font-bold`}>
                    Cover image
                </Text>
                <Text size="sm" fw={500} c={`red`}>
                    *
                </Text>
            </div>
            {!loading && !props.image && (
                <div>
                    <Button type="button" variant="light" size="xs" onClick={handleUploadButtonClick}>
                        Upload
                    </Button>

                    <FileInput
                        ref={hiddenFileInput}
                        accept={"image/*"}
                        style={{ display: "none" }}
                        onChange={handleImageUpload}
                    />
                </div>
            )}

            {loading && <Loader size={"sm"} />}

            {props.image && (
                <div className={`flex flex-col space-y-2 items-start`}>
                    <Image src={props.image} alt={"Cover image"} radius={"sm"} className={`border-gray-200 border-2`} />
                    <Button type="button" variant="light" size="xs" onClick={() => props.setImage(null)}>
                        Remove
                    </Button>
                </div>
            )}
        </div>
    );
}
