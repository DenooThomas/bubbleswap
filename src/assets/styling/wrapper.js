import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import device from './breakpoints';

const Wrapper = styled(motion.div)`
    width: 100%;
    padding: 0 4vw;
    margin-bottom: 4vh;
    position: relative;

    @media ${device.tablet} {
        margin-bottom: 5vh;
    }
`;

export default Wrapper;
