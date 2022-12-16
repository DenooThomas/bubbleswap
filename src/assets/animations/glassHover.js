import Colors from 'assets/styling/colors';

const glassHover = {
  initial: {
    backgroundColor: `${Colors.glass}`,
  },
  hover: {
    backgroundColor: 'rgba(241, 241, 241, 0.1)',
  },
  tap: {
    scale: 0.95,
    backgroundColor: 'rgba(241, 241, 241, 0.0)',
  },
};

export default glassHover;
