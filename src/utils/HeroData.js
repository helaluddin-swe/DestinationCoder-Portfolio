export const containerVarients = {
  // Spelling: Should be 'containerVariant'
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// From Screenshot (36).png

// ---
export const skillVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: (level) => ({
    width: `${level}%`,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.3,
    },
  }),
};

// From Screenshot (37).png
export const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // The transition object is incomplete in the screenshot,
    // I'll assume a structure similar to itemVariants
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// ---

// From Screenshot (38).png
export const imageVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};
