import styled from 'styled-components/macro';
import device from './breakpoints';

const Wrapper = styled.div`
    width: 100%;
    padding: 0 4vw;
    margin-bottom: 4vh;
    position: relative;

    @media ${device.tablet} {
        margin-bottom: 5vh;
    }
`;

export default Wrapper;
