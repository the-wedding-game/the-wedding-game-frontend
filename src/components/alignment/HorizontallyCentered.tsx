import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function HorizontallyCentered(props: Props) {
    return <div className={`flex items-center justify-center h-full w-full`}>{props.children}</div>;
}
