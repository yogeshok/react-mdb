import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background: var(--darkGrey);
    padding: 0 20px;

    @media (max-width: 725px) {
            height: 50px;
        } 
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    @media (max-width: 725px) {
        height: 30px;
    }

    img {
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;

        @media (max-width: 725px) {
            top: 8px;
            width: 15px;
        }
    }

    input {
        font-size: 28px;
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: var(--white);

        :focus {
            outline: none;
        }

        @media (max-width: 725px) {
            font-size: 15px;
            height: 18px;
            margin: 8px 0;
        }
    }
`;