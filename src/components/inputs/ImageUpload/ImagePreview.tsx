import { Image } from "@mantine/core";
import React from "react";
import ImageRemoveButton from "@/components/inputs/ImageUpload/ImageRemoveButton";

type Props = {
    image: string;
    removeImage: () => void;
};

export default function ImagePreview(props: Props) {
    return (
        <div className={`flex flex-col space-y-2 items-start`}>
            <Image src={props.image} alt={"Cover image"} radius={"sm"} className={`border-gray-200 border-2`} />{" "}
            <ImageRemoveButton removeImage={props.removeImage} />
        </div>
    );
}
