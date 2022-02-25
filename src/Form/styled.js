import styled, {css} from "styled-components";

export const Wrapper = styled.form`
    max-width: 500px;
    margin: auto;
  `;

export const Legend = styled.legend`
    background-color: hsl(180, 58%, 98%);
    border: 1px solid teal;
    border-radius: 5px;
    padding: 5px;
    color: rgb(21, 116, 116);
    font-weight: 700;
    text-align: left;
    font-size: 20px;
`;

export const Fieldset = styled.fieldset`
    background-color: rgb(217, 245, 245);
    border: 1px solid rgb(217, 245, 245);
    margin: 15px auto;
    border-radius: 5px;
    max-width: 500px;
    padding: 10px 20px 20px 20px;
    color: teal;
    font-weight: bold;
`;

export const Field = styled.input`
    padding: 4px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    `;

export const ResultBlock = styled.p`
    background-color: rgb(217, 245, 245);
    padding: 20px 15px;
    font-weight: 700;
    font-size: 20px;
    border-radius: 5px;
    text-align: center;
    color:teal;
    `;

export const Button = styled.button`
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: hsl(180deg 81% 68%);
    width: 100%;
    color: teal;
    font-size: 20px;
    font-weight:bold;

    &:hover {
        background-color: hsl(180deg 78% 30%);
        color: white;
    }
`;
 


