import styled, { css } from "styled-components";

export const Wrapper = styled.form`
    max-width: 500px;
    margin: auto;
  `;

export const Legend = styled.legend`
    background-color:  ${({ theme }) => theme.color.spray};
    border-radius: 5px;
    padding: 5px;
    color:  ${({ theme }) => theme.color.teal};
    font-weight: 700;
    text-align: left;
    font-size: 20px;
`;

export const Fieldset = styled.fieldset`
    background-color: ${({ theme }) => theme.color.clearDay};
    border:none;
    margin: 15px auto;
    border-radius: 5px;
    max-width: 500px;
    padding: 10px 20px 20px 20px;
    color:   ${({ theme }) => theme.color.teal};
    font-weight: bold;
`;

export const InformationApi = styled.fieldset`
    background-color: ${({ theme }) => theme.color.clearDay};
    border:none;
    margin: 15px auto;
    border-radius: 5px;
    max-width: 500px;
    padding: 10px 20px 20px 20px;
    color:   ${({ theme }) => theme.color.teal};
    font-weight: bold;
`;

export const Field = styled.input`
    padding: 4px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    `;

export const ResultBlock = styled.p`
    background-color:  ${({ theme }) => theme.color.clearDay};
    padding: 20px 15px;
    font-weight: 700;
    font-size: 20px;
    border-radius: 5px;
    text-align: center;
    color:  ${({ theme }) => theme.color.teal};
    `;

export const Button = styled.button`
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color:  ${({ theme }) => theme.color.spray};
    width: 100%;
    color:  ${({ theme }) => theme.color.teal};
    font-size: 20px;
    font-weight:bold;

    &:hover {
        background-color: ${({ theme }) => theme.color.teal};
        color: ${({ theme }) => theme.color.white};
    }
`;



