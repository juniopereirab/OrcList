import styled from 'styled-components';

const Task = styled.div`
    display: inline-table;
    width: 20rem;
    height: 5rem;
    margin: 5px;
    background: #81B760;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0,.3);
    transition: all .4s;
    &:hover {
        box-shadow: 1px 1px 2px rgba(0,0,0,.1);
        transition-duration: .4s;
    }
`

export default Task;