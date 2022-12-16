export const showElement = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const showElementDelayed = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export const buttonGlow = {
  hover: {
    boxShadow: '0px 2px 10px 1px rgba(241,83,174,1)',
  },
};
