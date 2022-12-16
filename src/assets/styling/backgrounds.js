import { css } from 'styled-components';

export const glassBackground = css`
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.3px);
    -webkit-backdrop-filter: blur(4.3px);
    border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const smokeBackground = css`
    background: linear-gradient(155.94deg, rgba(44, 112, 213, 0.1) -34.45%, rgba(255, 255, 255, 0) 55.98%), rgba(255, 255, 255, 0.05);
`;

export const shadePseudo = css`
    &:after {
    content: '';
    position: absolute;
    left: 4vw;
    right: 4vw;
    top: -5vh;
    bottom: -5vh;
    z-index: 1;
    transform: skew(-8deg) rotate(-8deg);
    border-radius: 2rem;
    background: linear-gradient(170.98deg, rgba(255, 255, 255, 0.03) 6.51%, rgba(255, 255, 255, 0) 86.89%);
    border-radius: 56px;
    pointer-events: none;
    z-index: 1;
    }
`;
