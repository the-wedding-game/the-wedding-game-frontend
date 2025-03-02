import { AnimatePresence } from "framer-motion";

type Props = {
    children: React.ReactNode;
};

export default function AnimationWrapper(props: Props) {
    return <AnimatePresence mode="wait">{props.children}</AnimatePresence>;
}
