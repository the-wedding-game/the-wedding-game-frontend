import { IconExclamationCircleFilled } from "@tabler/icons-react";

export default function ErrorIcon() {
    return (
        <div className={`flex p-2 bg-red-200 rounded-full`}>
            <IconExclamationCircleFilled color={"red"} opacity={0.8} />
        </div>
    );
}
