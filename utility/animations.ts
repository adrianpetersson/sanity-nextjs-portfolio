/* eslint-disable import/prefer-default-export */
import { Variants } from 'framer-motion';

export const popup: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.3,
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

export const sweepin: Variants = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.3,
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

export const childAnimation: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  transition: {
    type: 'spring',
  },
};
