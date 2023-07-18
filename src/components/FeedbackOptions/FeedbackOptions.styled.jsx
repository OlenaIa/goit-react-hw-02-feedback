import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
gap: 20px;
`;

export const Button = styled.button `
    text-transform: capitalize;
    width: 100px;
    padding: 10px;
    font-size: 16px;
    background-color: greenyellow;
    &:hover {
        background-color: yellow;
    }
`;