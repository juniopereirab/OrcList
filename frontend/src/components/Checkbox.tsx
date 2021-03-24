import styled, {css} from 'styled-components';

interface CheckboxProps {
    checked: boolean
    image: string
}

const Checkbox = styled.div<CheckboxProps>`
    cursor: pointer;
    margin: auto;
    width: 45px;
    height: 45px;
    background:#345123;
    border-radius: 5px;
    transition: all .4s;
    ${props => props.checked && css`
        background: #243818 url(${props.image}) no-repeat center; 
    `}
`

export default Checkbox;