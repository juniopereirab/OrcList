import styled from 'styled-components';

interface ButtonProps {
    readonly primary?: boolean;
}

const Button = styled.button<ButtonProps>`
    width: 12rem;
    height: 3.5rem;
    background: #F5F2D2;
    border-radius: 10px;
    border: 0;
    color: black;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 18px;
    font-family: 'Bungee', 'cursive';
    box-shadow: 4px 4px 10px rgba(0,0,0,.5);
    transition: all .2s;
    &:hover {
        box-shadow: 1px 1px 5px rgba(0,0,0,.2);
        transition-duration: .2s;
    }
    &:active {
        box-shadow: 1px 1px 5px rgba(0,0,0,.2);
        transition-duration: .2s;
    }
`

export default Button;

