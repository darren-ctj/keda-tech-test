export const FADE_IN_BLUR_ANIMATION = {
  initial: { opacity: 0, y: 10, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, delay: 0.3, ease: "easeOut" as const },
  viewport: { once: true },
};

export const getFadeInBlurAnimation = (
  delay: number = 0.3,
  duration: number = 0.6,
  y: number = 10,
) => ({
  initial: { opacity: 0, y, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

export const staggerContainerVariants = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

