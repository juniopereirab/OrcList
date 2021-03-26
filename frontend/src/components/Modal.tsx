import styled from 'styled-components';

export const ModalBlur = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: rgba(0,0,0,.7);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContent = styled.div`
    background: #FFFFFF;
    color: #000;
    width: 25rem;
    height: 10rem;
    border-radius: 10px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`