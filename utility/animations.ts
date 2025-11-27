import { Variants } from "framer-motion";

export const popup: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      delayChildren: 0.5,
      staggerChildren: 0.3,
      type: "spring",
    },
    y: 0,
  },
};

export const sweepin: Variants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      delayChildren: 0.5,
      staggerChildren: 0.3,
      type: "spring",
    },
    x: 0,
  },
};

export const childAnimation: Variants = {
  hidden: { opacity: 0, x: -100 },
  transition: {
    type: "spring",
  },
  visible: { opacity: 1, x: 0 },
};
