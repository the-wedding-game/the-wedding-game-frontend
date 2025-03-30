import HorizontallyCentered from "@/components/alignment/HorizontallyCentered";
import { Loader } from "@mantine/core";

export default function GenericLoading() {
    return (
        <HorizontallyCentered>
            <Loader />
        </HorizontallyCentered>
    );
}
