import { css } from 'styled-components';

export const GlassBackground = css`
    background: linear-gradient(93.15deg, rgba(255, 255, 255, 0.05) 5.22%, rgba(255, 255, 255, 0) 65.54%);
    backdrop-filter: blur(7.5px);
`;

export const SmokeBackground = css`
    background: linear-gradient(155.94deg, rgba(44, 112, 213, 0.1) -34.45%, rgba(255, 255, 255, 0) 55.98%), rgba(255, 255, 255, 0.05);
`;

export const ShadePseudo = css`
    &:after {
    content: '';
    position: absolute;
    left: 10px;
    right: 10px;
    top: -100px;
    bottom: -150px;
    z-index: 1;
    transform: skew(-10deg) rotate(-10deg);
    border-radius: 2rem;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(110,110,110,0.01) 0%, rgba(0,0,0,0) 80%);
    pointer-events: none;
    }
`;
