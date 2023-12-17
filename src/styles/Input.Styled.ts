import styled from "styled-components";

export const Contatiner = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const Label = styled.label`
  padding: 10px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #ffb6c1;
  align-items: center;
  height: 40px;
  padding: 0 7px;
  font-size: 24px;
  font-family: "UhBeemysen";
  font-weight: bolder;
`;

export const Button = styled.button`
  border: none;
  color: #ffb6c1;
  font-size: 24px;
  &:hover {
    cursor: pointer;
    color: white;
    transition: 0.3s ease-in-out;
  }
`;
