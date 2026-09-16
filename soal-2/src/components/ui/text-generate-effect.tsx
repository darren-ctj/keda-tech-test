import { motion, type Variants } from "framer-motion";
import { cn } from "../../lib/utils";

type TextGenerateEffectProps = {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    highlights?: string[];
    words: string;
    className?: string;
    stagger?: number;
    duration?: number;
};

export const TextGenerateEffect = ({
    tag = "p",
    highlights = [],
    words,
    className,
    stagger = 0.1,
    duration = 0.3,
}: TextGenerateEffectProps) => {
    // Escape special regex characters for each highlight phrase
    const escapedHighlights = highlights.map((h) =>
        h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );

    // Create regex pattern that matches any highlight phrase or individual words
    const pattern =
        escapedHighlights.length > 0
            ? `${escapedHighlights.join("|")}|\\S+`
            : "\\S+";

    const regex = new RegExp(pattern, "g");

    const wordsArray = words.match(regex) || [];

    // Define animation variants
    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
            },
        },
    };

    const child: Variants = {
        hidden: {
            opacity: 0,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration,
                ease: "easeOut",
            },
        },
    };

    const MotionTag = motion[tag];

    return (
        <MotionTag
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {wordsArray.map((word: string, index: number) => {
                const isHighlighted = highlights.includes(word);

                return (
                    <motion.span
                        key={index}
                        variants={child}
                        className={cn("inline-block text-foreground", isHighlighted && "text-[#3A3D55]")}
                    >
                        {word}&nbsp;
                    </motion.span>
                );
            })}
        </MotionTag>
    );
};