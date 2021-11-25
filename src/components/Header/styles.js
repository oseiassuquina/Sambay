import styled from "styled-components";

export const Container = styled.header`
    background: var(--navbar);
`;

export const Content = styled.div`
    max-width: 1120%;
    margin: 0 auto;

    padding:  1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icons{
        display: flex;
        justify-content: space-between;
        width: 6rem;
        height: 1rem;
    }
`;

export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    left: 20px;
    background: #fff;
    border-radius: 6px;
    padding:0 0.5rem;
    margin-left: -40rem;
    

    input{
        border-radius: 6px;
        border: 0px;
        width: 15rem;
        height: 28px;

        &:focus{
            border: 0 none;
            outline: 0;
        }
    }
    
`;

