import styled from 'styled-components';
import check from '../assets/check.svg';
import garbage from '../assets/garbage.svg';

export const DeleteButton = styled.button`
    border: 0;
    width: 35px;
    border-radius: 5px;
    background: url(${garbage}) #F66161 no-repeat center;
    transition: all .4s;
    &:hover {
        background: #c94d4d url(${garbage}) no-repeat center;
        transition-duration: .4s;
    }
`

export const CompleteButton = styled.button`
    border: 0;
    width: 35px;
    border-radius: 5px;
    background: url(${check}) #81B760 no-repeat center;
    transition: all .4s;
    &:hover {
        background: #658f4b url(${check}) no-repeat center;
        transition-duration: .4s;
    }
`