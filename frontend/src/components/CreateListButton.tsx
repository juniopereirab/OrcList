import styled from 'styled-components';

const CreateList = styled.button`
    width: 8rem;
    height: 2.5rem;
    background: #81B760;
    border-radius: 5px;
    border: 0;
    color: white;
    font-family: 'Bungee', 'cursive';
    transition: all .2s;
    &:hover {
        transform: scale(1.1);
        transition-duration: .2s;
    }
`

export default CreateList;