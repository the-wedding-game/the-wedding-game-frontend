import { motion } from "framer-motion";
import { ReactNode } from "react";

const MAX_DELAY = 0.3;
const STAGGER = 0.1;

type Props = {
    children: ReactNode;
    index: number;
    length: number;
};

export default function AnimationStagger(props: Props) {
    let delay = props.index * STAGGER;
    if (delay > MAX_DELAY) delay = MAX_DELAY;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: delay }}
            className={`flex`}
        >
            {props.children}
        </motion.div>
    );
}
