import MediumText from "@/components/text/MediumText";
import SmallText from "@/components/text/SmallText";
import { GalleryEntry } from "@/types/gallery-types";

type Props = {
    entry: GalleryEntry;
};

export default function GalleryMetadata(props: Props) {
    return (
        <div className={`-mt-20 p-3 text-white bg-gradient-to-b from-transparent to-black`}>
            <SmallText color={"white"}>From:</SmallText>
            <MediumText>{props.entry.submittedBy}</MediumText>
        </div>
    );
}
