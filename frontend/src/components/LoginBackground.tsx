import styled, {css} from 'styled-components';

interface ContainerProps {
    readonly isGreen: boolean;
}

const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 75%;
    background: #F5F2D2;
    position: absolute;
    bottom: 0;
    clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
    z-index: -1;
    ${props => props.isGreen && css`
        background: #81B750;
        clip-path: polygon(0 25%, 100% 0, 100% 75%, 0 100%);
        filter: drop-shadow(5rem 5rem 0.75rem crimson);
    `}
`;

export default Container;