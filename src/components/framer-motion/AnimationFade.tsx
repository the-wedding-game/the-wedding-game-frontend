import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function AnimationFade(props: Props) {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            {props.children}
        </motion.div>
    );
}
