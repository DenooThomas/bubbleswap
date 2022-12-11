import Colors from 'assets/styling/colors';
import styled from 'styled-components';
import device from './breakpoints';

export const ButtonGlow = styled.button`
    width: 12rem;
    height: 3rem;
    border: none;
    color: ${({ dark }) => (dark ? Colors.black : Colors.white)};
    border-radius: 1.1rem;
    padding: 5px 35px;
    background: rgb(241,83,174);
    background: linear-gradient(145deg, rgba(241,83,174,1) 0%, rgba(238,80,45,1) 100%);
    box-shadow: 0px 2px 10px 1px rgba(241,83,174,1);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1.7px;

    @media ${device.mobile} {
        width: 70vw;
    }
`;

export const ButtonGlowWide = styled(ButtonGlow)`
    width: 275px;
`;
