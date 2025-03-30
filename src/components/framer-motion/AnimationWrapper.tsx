import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

type Props = {
    readonly children: ReactNode;
};

export default function AnimationWrapper(props: Props) {
    return <AnimatePresence mode="wait">{props.children}</AnimatePresence>;
}
